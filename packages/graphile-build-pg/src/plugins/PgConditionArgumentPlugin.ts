import "./PgTablesPlugin";

import type {
  PgConditionPlan,
  PgSelectPlan,
  PgSelectSinglePlan,
  PgSourceColumns,
} from "@dataplan/pg";
import type { ConnectionPlan, InputPlan } from "graphile-crystal";
import type { Plugin } from "graphile-plugin";
import type { GraphQLInputType } from "graphql";

import { getBehavior } from "../behavior";
import { version } from "../index";
import { EXPORTABLE } from "graphile-exporter";

declare global {
  namespace GraphileEngine {
    interface Inflection {
      conditionType(this: Inflection, typeName: string): string;
    }
    interface ScopeGraphQLInputObjectType {
      isPgCondition?: boolean;
    }
    interface ScopeGraphQLInputObjectTypeFieldsField {
      isPgConnectionConditionInputField?: boolean;
    }
  }
}

export const PgConditionArgumentPlugin: Plugin = {
  name: "PgConditionArgumentPlugin",
  description: "Adds the 'condition' argument to connections and lists",
  version: version,

  inflection: {
    add: {
      conditionType(typeName) {
        return this.camelCase(`${typeName}-condition`);
      },
    },
  },

  schema: {
    hooks: {
      init(_, build) {
        const { inflection, sql } = build;
        for (const codec of build.pgCodecMetaLookup.keys()) {
          build.recoverable(null, () => {
            // Ignore scalar codecs
            if (!codec.columns) {
              return;
            }

            const behavior = getBehavior(codec.extensions);
            if (behavior && !behavior.includes("selectable")) {
              return;
            }

            // TODO: create the condition type for this type

            const tableTypeName = inflection.tableType(codec);
            const conditionName = inflection.conditionType(tableTypeName);
            /* const TableConditionType = */
            build.registerInputObjectType(
              conditionName,
              {
                isPgCondition: true,
              },

              () => ({
                description: build.wrapDescription(
                  `A condition to be used against \`${tableTypeName}\` object types. All fields are tested for equality and combined with a logical ‘and.’`,
                  "type",
                ),
                fields: (context) => {
                  const { fieldWithHooks } = context;
                  const columns: PgSourceColumns = codec.columns;
                  return Object.entries(columns).reduce(
                    (memo, [columnName, column]) => {
                      const behavior = getBehavior(column.extensions);
                      if (behavior && !behavior.includes("selectable")) {
                        return memo;
                      }

                      const fieldName = inflection.column({
                        columnName,
                        column,
                        codec,
                      });
                      const type = build.getGraphQLTypeByPgCodec(
                        column.codec,
                        "input",
                      );
                      if (!type) {
                        return memo;
                      }
                      memo = build.extend(
                        memo,
                        {
                          [fieldName]: fieldWithHooks(
                            {
                              fieldName,
                              isPgConnectionConditionInputField: true,
                            },
                            {
                              description: build.wrapDescription(
                                `Checks for equality with the object’s \`${fieldName}\` field.`,
                                "field",
                              ),
                              type: type as GraphQLInputType,
                              plan: EXPORTABLE(
                                (column, columnName, sql) =>
                                  function plan(
                                    $condition: PgConditionPlan<
                                      PgSelectPlan<any, any, any, any>
                                    >,
                                    $value: InputPlan,
                                  ) {
                                    if ($value.evalIs(null)) {
                                      $condition.where(
                                        sql`${
                                          $condition.alias
                                        }.${sql.identifier(
                                          columnName,
                                        )} is null`,
                                      );
                                    } else {
                                      $condition.where(
                                        sql`${
                                          $condition.alias
                                        }.${sql.identifier(
                                          columnName,
                                        )} = ${$condition.placeholder(
                                          $value,
                                          column.codec,
                                        )}`,
                                      );
                                    }
                                  },
                                [column, columnName, sql],
                              ),
                            },
                          ),
                        },
                        `Adding condition argument for ${codec.name}' ${columnName} column`,
                      );
                      return memo;
                    },
                    {},
                  );
                },
              }),
              `Adding condition type for ${codec.name}.`,
              // TODO:
              /* `You can rename the table's GraphQL type via a 'Smart Comment':\n\n  ${sqlCommentByAddingTags(
                table,
                {
                  name: "newNameHere",
                },
              )}`, */
            );
          });
        }
        return _;
      },

      GraphQLObjectType_fields_field_args(args, build, context) {
        const { sql, extend } = build;
        const {
          scope: {
            fieldName,
            isPgFieldConnection,
            isPgFieldSimpleCollection,
            pgSource,
          },
          Self,
        } = context;

        const shouldAddCondition =
          isPgFieldConnection || isPgFieldSimpleCollection;
        if (
          !shouldAddCondition ||
          !pgSource ||
          !pgSource.codec.columns ||
          pgSource.isUnique
        )
          return args;

        const behavior = getBehavior(pgSource.extensions);
        if (behavior && !behavior.includes("filterable")) {
          return args;
        }

        const tableTypeName = build.inflection.tableType(pgSource.codec);
        const tableConditionTypeName =
          build.inflection.conditionType(tableTypeName);
        const tableConditionType = build.getInputTypeByName(
          tableConditionTypeName,
        );
        if (!tableConditionType) {
          return args;
        }

        return build.extend(
          args,
          {
            condition: {
              description: build.wrapDescription(
                "A condition to be used in determining which values should be returned by the collection.",
                "arg",
              ),
              type: tableConditionType,
              plan: isPgFieldConnection
                ? (
                    _condition,
                    $connection: ConnectionPlan<
                      PgSelectSinglePlan<any, any, any, any>,
                      PgSelectPlan<any, any, any, any>
                    >,
                  ) => {
                    const $select = $connection.getSubplan();
                    return $select.wherePlan();
                  }
                : (_condition, $select: PgSelectPlan<any, any, any, any>) => {
                    return $select.wherePlan();
                  },
            },
          },
          `Adding condition to connection field '${fieldName}' of '${Self.name}'`,
        );
      },
    },
  },
};