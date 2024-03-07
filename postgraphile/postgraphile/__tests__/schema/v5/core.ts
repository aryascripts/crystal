import { createWithPgClient } from "@dataplan/pg/adaptors/pg";
import { writeFile } from "fs/promises";
import type { PromiseOrDirect } from "grafast";
import type { GraphQLSchema } from "grafast/graphql";
import { lexicographicSortSchema, printSchema } from "grafast/graphql";
import { makeSchema } from "graphile-build";
import { exportSchemaAsString } from "graphile-export";
import type { PoolClient } from "pg";

import AmberPreset from "../../../src/presets/amber.js";
import {
  snapshot,
  StripOidsPlugin,
  withPoolClientTransaction,
} from "../../helpers.js";

jest.setTimeout(30000);

let countByPath = Object.create(null);

export const test =
  (
    testPath: string,
    schemata: string | string[],
    additionalPreset: GraphileConfig.Preset = {},
    setup?: string | ((pgClient: PoolClient) => PromiseOrDirect<unknown>),
    finalCheck?: (schema: GraphQLSchema) => PromiseOrDirect<unknown>,
    sort = true,
  ) =>
  () =>
    withPoolClientTransaction(async (client) => {
      if (setup) {
        if (typeof setup === "function") {
          await setup(client);
        } else {
          await client.query(setup);
        }
      }
      const schemas = Array.isArray(schemata) ? schemata : [schemata];
      const graphileBuildOptions = {};
      const preset: GraphileConfig.Preset = {
        extends: [AmberPreset, additionalPreset],
        plugins: [StripOidsPlugin],
        pgServices: [
          {
            adaptor: { createWithPgClient },
            name: "main",
            withPgClientKey: "withPgClient",
            pgSettingsKey: "pgSettings",
            pgSettingsForIntrospection: null,
            pgSettings: undefined,
            schemas: schemas,
            adaptorSettings: {
              poolClient: client,
            },
          } as GraphileConfig.PgServiceConfiguration,
        ],
        schema: {
          ...graphileBuildOptions,
        },
      };
      const { schema, resolvedPreset: _resolvedPreset } =
        await makeSchema(preset);
      const i = testPath in countByPath ? countByPath[testPath] + 1 : 1;
      countByPath[testPath] = i;
      const sorted = sort ? lexicographicSortSchema(schema) : schema;
      const printed = printSchema(sorted);
      const filePath = `${testPath.replace(/\.test\.[jt]s$/, "")}${
        sort || i > 1 ? `.${i}` : ""
      }.graphql`;
      await snapshot(printed + "\n", filePath);
      if (finalCheck) {
        await finalCheck(schema);
      }
      // Now check the schema exports
      const { code: exportString } = await exportSchemaAsString(schema, {
        mode: "typeDefs",
        prettier: true,
        modules: {
          jsonwebtoken: await import("jsonwebtoken"),
        },
      });
      const executableSchemaPath = `${testPath.replace(/\.test\.[jt]s$/, "")}${
        sort || i > 1 ? `.${i}` : ""
      }.export.mjs`;
      // Cannot rely on snapshot until this is more stable
      await writeFile(executableSchemaPath, exportString.trim() + "\n");
      //await snapshot(exportString.trim() + "\n", executableSchemaPath);
    });
