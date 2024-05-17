import type {
  PluginHook,
  PluginHookObject,
  PromiseOrDirect,
} from "./interfaces.js";
import { sortWithBeforeAfterProvides } from "./sort.js";

const isDev = process.env.GRAPHILE_ENV === "development";

export type HookObject<T> = Record<
  keyof T,
  PluginHook<(...args: any[]) => any>
>;

export type AsyncHookResultHandler<TResult> = (
  result: AsyncHookResult<TResult>,
) => PromiseOrDirect<AsyncHookResult<TResult>>;
export type AsyncHookResult<TResult> =
  | {
      error: Error;
      result?: never;

      // Must NEVER be set! Makes it easier (and more performant) to do
      // TypeScript comparison of result vs promise.
      then?: never;
    }
  | {
      error?: never;
      result: TResult;

      // Must NEVER be set! Makes it easier (and more performant) to do
      // TypeScript comparison of result vs promise.
      then?: never;
    };

export function isAsyncHookResultHandler<TResult>(
  obj: any,
): obj is AsyncHookResultHandler<TResult> {
  return typeof obj === "function";
}

function finish<TResult>(result: AsyncHookResult<TResult>) {
  if (result.error) {
    throw result.error;
  } else {
    return result.result;
  }
}

/**
 * When we've finished the implementation() call, this goes through our
 * stack of result handlers and calls the handler for each hook in reverse
 * order. Each handler may or may not be asynchronous, so this forms a
 * queue.
 */
function handleResult<TResult>(
  resultHandlers: readonly AsyncHookResultHandler<TResult>[],
  initialResult: AsyncHookResult<TResult>,
) {
  let result: PromiseLike<AsyncHookResult<TResult>> | AsyncHookResult<TResult> =
    initialResult;
  for (let i = resultHandlers.length - 1; i >= 0; i--) {
    const handler = resultHandlers[i];
    if (result.then) {
      result = result.then(
        (result) => handler(result),
        (error) => handler({ error }),
      );
    } else {
      // It is critical that `handleResult` does not throw, otherwise it
      // may be called multiple times. Thus we wrap the handler in a
      // try/catch block.
      try {
        result = handler(result);
      } catch (error) {
        result = { error };
      }
    }
  }
  /**
   * Finally, once the chain is complete, we turn an AsyncHookResult into
   * the result of calling implementation, which is either a value or a
   * thrown error. Note that this may or may not be wrapped in promises
   * via the calling chain.
   */
  if (isPromiseLike(result)) {
    // We don't need to handle the error case here, since that would just
    // be to reject with an error anyway.
    return result.then(finish);
  } else {
    return finish(result);
  }
}

export class AsyncHooks<THooks extends HookObject<THooks>> {
  callbacks: {
    [key in keyof THooks]?: Array<
      THooks[keyof THooks] extends PluginHook<infer U> ? U : never
    >;
  } = Object.create(null);

  hook<THookName extends keyof THooks>(
    event: THookName,
    fn: THooks[THookName] extends PluginHook<infer U> ? U : never,
  ): void {
    this.callbacks[event] = this.callbacks[event] || [];
    this.callbacks[event]!.push(fn);
  }

  call<THookName extends keyof THooks, TResult>(
    hookName: THookName,
    event: Parameters<
      THooks[THookName] extends PluginHook<infer U> ? U : never
    >[0],
    implementation: (
      event: Parameters<
        THooks[THookName] extends PluginHook<infer U> ? U : never
      >[0],
    ) => PromiseOrDirect<TResult>,
  ): PromiseOrDirect<TResult> {
    const callbacks = this.callbacks[hookName];
    if (!callbacks) {
      // If there aren't any callbacks, just do the thing!
      return implementation(event);
    }
    const l = callbacks.length;
    /**
     * The chain of promises (if any) generated by calling the callbacks.
     * Callbacks run one-after-another, and each may or may not be
     * asynchronous.
     */
    let chain = undefined;
    /**
     * If the handlers return a result handler, this builds a stack of those to
     * unwind once the implementation has finished executing.
     */
    let resultHandlers: AsyncHookResultHandler<TResult>[] | undefined =
      undefined;
    /**
     * Called on the result of a hook, checks that the hook result is valid,
     * and if it contains a result handler then adds it to the stack.
     */
    const captureHandlers = <T>(
      result: T | Promise<T>,
    ): void | Promise<void> => {
      if (result == null) {
        return;
      } else if (isPromiseLike(result)) {
        return result.then(captureHandlers);
      } else if (isAsyncHookResultHandler<TResult>(result)) {
        if (resultHandlers !== undefined) {
          resultHandlers.push(result);
        } else {
          resultHandlers = [result];
        }
        return;
      } else {
        throw new Error(
          `Hook '${
            hookName as string
          }' returned invalid value of type ${typeof result} - must be 'undefined', a Promise/PromiseLike, or a AsyncHookResultHandler object.`,
        );
      }
    };
    // Handles a successful (non-error) result
    const handleSuccess = (result: TResult) => {
      if (!resultHandlers) {
        return result;
      } else {
        return handleResult(resultHandlers, { result });
      }
    };
    // Handles when an error is thrown (or a promise rejected).
    const handleError = (error: Error) => {
      if (resultHandlers === undefined) {
        throw error;
      } else {
        return handleResult(resultHandlers, { error });
      }
    };
    // This is where the implementation is called, and then we handle the result.
    const next = () => {
      // Synchronous errors thrown here are handled by the calling try/catch or
      // promise chain
      const result = implementation(event);
      if (isPromiseLike(result)) {
        return result.then(handleSuccess, handleError);
      } else {
        return handleSuccess(result);
      }
    };

    // Loop through the callbacks, capturing their handlers, and then call
    // next(). Note that each callback may be asynchronous, but we don't want
    // to create promises if everything is synchronous, so no async/await.
    try {
      for (let i = 0; i < l; i++) {
        const callback = callbacks[i];
        if (chain !== undefined) {
          chain = chain.then(() => captureHandlers(callback(event)));
        } else {
          chain = captureHandlers(callback(event));
        }
      }
      if (isPromiseLike(chain)) {
        return chain.then(next).then(null, handleError);
      } else {
        return next();
      }
    } catch (e) {
      return handleError(e);
    }
  }

  /**
   * Hooks can _mutate_ the argument, they cannot return a replacement. This
   * allows us to completely side-step the problem of recursive calls.
   */
  process<THookName extends keyof THooks>(
    hookName: THookName,
    ...args: Parameters<
      THooks[THookName] extends PluginHook<infer U> ? U : never
    >
  ): void | Promise<void> {
    const callbacks = this.callbacks[hookName];
    if (!callbacks) {
      return;
    }
    const l = callbacks.length;
    let chain = undefined;
    for (let i = 0; i < l; i++) {
      const callback = callbacks[i];
      if (chain !== undefined) {
        chain = chain.then(() => callback.apply(null, args));
      } else {
        const result = callback.apply(null, args);
        if (result != null) {
          if (isDev && typeof result.then !== "function") {
            throw new Error(
              `Hook '${
                hookName as string
              }' returned invalid value of type ${typeof result} - must be 'undefined' or a Promise/PromiseLike.`,
            );
          }
          chain = result;
        }
      }
    }
    return chain;
  }
}

export function applyHooks<THooks extends HookObject<THooks>>(
  plugins: readonly GraphileConfig.Plugin[] | undefined,
  hooksRetriever: (
    plugin: GraphileConfig.Plugin,
  ) => Partial<THooks> | undefined,
  applyHookCallback: <THookName extends keyof THooks>(
    hookName: THookName,
    hookFn: THooks[THookName] extends PluginHook<infer U> ? U : never,
    plugin: GraphileConfig.Plugin,
  ) => void,
): void {
  type FullHookSpec = {
    id: string;
    plugin: GraphileConfig.Plugin;
    provides: string[];
    before: string[];
    after: string[];
    callback: THooks[keyof THooks] extends PluginHook<infer U> ? U : never;
  };
  // Normalize all the hooks and gather them into collections
  const allHooks: {
    [key in keyof THooks]?: Array<FullHookSpec>;
  } = Object.create(null);
  let uid = 0;
  if (plugins) {
    for (const plugin of plugins) {
      const hooks = hooksRetriever(plugin);
      if (!hooks) {
        continue;
      }
      const keys = Object.keys(hooks) as unknown as Array<keyof typeof hooks>;
      for (const key of keys) {
        const hookSpecRaw: THooks[typeof key] | undefined = hooks[key];
        if (!hookSpecRaw) {
          continue;
        }

        // TypeScript nonsense
        const isPluginHookObject = <T extends (...args: any[]) => any>(
          v: PluginHook<T>,
        ): v is PluginHookObject<T> => typeof v !== "function";
        const isPluginHookFunction = <T extends (...args: any[]) => any>(
          v: PluginHook<T>,
        ): v is T => typeof v === "function";

        const callback: THooks[typeof key] extends PluginHook<infer U>
          ? U
          : never = (
          isPluginHookFunction(hookSpecRaw) ? hookSpecRaw : hookSpecRaw.callback
        ) as any;
        const { provides, before, after } = isPluginHookObject(hookSpecRaw)
          ? hookSpecRaw
          : ({} as { provides?: never[]; before?: never[]; after?: never });
        if (!allHooks[key]) {
          allHooks[key] = [];
        }
        // We need to give each hook a unique ID
        const id = String(uid++);
        allHooks[key]!.push({
          id,
          plugin,
          callback,
          provides: [...(provides || []), id, plugin.name],
          before: before || [],
          after: after || [],
        });
      }
    }
  }

  // Sort the collections according to provides, before and after.
  for (const hookName in allHooks) {
    const hooks = allHooks[hookName] as FullHookSpec[] | undefined;
    if (!hooks) {
      continue;
    }

    const final = sortWithBeforeAfterProvides(hooks, "id");

    // Finally we can register the hooks
    for (const hook of final) {
      applyHookCallback(hookName, hook.callback, hook.plugin);
    }
  }
}

function isPromiseLike<T>(value: T | PromiseLike<T>): value is PromiseLike<T> {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as any).then === "function"
  );
}
