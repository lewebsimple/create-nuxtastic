import { builder } from "~/server/graphql/schema";
import { version } from "~/package.json";

export const versionSchemaTypes = () =>
  builder.queryField("version", (t) =>
    t.string({
      resolve: () => version,
    }),
  );
