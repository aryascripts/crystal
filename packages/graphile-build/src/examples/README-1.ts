import chalk from "chalk";
import { readFile } from "fs/promises";
import { lambda } from "graphile-crystal";
import { EXPORTABLE, exportSchema } from "graphile-exporter";
import { graphql, printSchema } from "graphql";
import { URL } from "url";

import { buildSchema, defaultPlugins } from "../index.js";

declare global {
  namespace GraphileEngine {
    interface GraphileBuildOptions {
      myDefaultMin?: number;
      myDefaultMax?: number;
    }
  }
}

// Create a simple plugin that adds a random field to every GraphQLObject
const MyRandomFieldPlugin: GraphileEngine.Plugin = (
  builder,
  { myDefaultMin = 1, myDefaultMax = 100 },
) => {
  builder.hook("GraphQLObjectType:fields", (fields, build, context) => {
    const {
      extend,
      graphql: { GraphQLInt },
    } = build;
    const { Self, fieldWithHooks } = context;
    return extend<typeof fields, typeof fields>(
      fields,
      {
        random: fieldWithHooks({ fieldName: "random" }, () => ({
          type: GraphQLInt,
          args: {
            sides: {
              type: GraphQLInt,
            },
          },
          plan: EXPORTABLE(
            (lambda, myDefaultMax, myDefaultMin) => (_$parent, args) => {
              return lambda(
                args.sides,
                (sides = myDefaultMax) =>
                  Math.floor(Math.random() * (sides + 1 - myDefaultMin)) +
                  myDefaultMin,
              );
            },
            [lambda, myDefaultMax, myDefaultMin],
          ),
        })),
      },
      `adding 'random' field to ${Self.name}`,
    );
  });
};

(async function () {
  // Create our GraphQL schema by applying all the plugins
  const schema = await buildSchema([...defaultPlugins, MyRandomFieldPlugin], {
    // ... options
    myDefaultMin: 1,
    myDefaultMax: 6,
  });

  // Output our schema
  console.log(chalk.blue(printSchema(schema)));
  console.log();
  console.log();
  console.log();

  // Run our query
  const result = await graphql({
    schema,
    source: `
      query {
        random
      }
    `,
    rootValue: null,
    variableValues: {},
  });
  console.log(result); // { data: { random: 4 } }

  console.dir(schema.toConfig());

  // Export schema
  // const exportFileLocation = new URL("../../temp.js", import.meta.url);
  const exportFileLocation = `${__dirname}/../../temp.mjs`;
  await exportSchema(schema, exportFileLocation);

  // output code
  console.log(chalk.green(await readFile(exportFileLocation, "utf8")));

  // run code
  const { schema: schema2 } = await import(exportFileLocation.toString());
  const result2 = await graphql({
    schema: schema2,
    source: `
      query {
        random
      }
    `,
    rootValue: null,
    variableValues: {},
  });
  console.log(result2); // { data: { random: 4 } }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});