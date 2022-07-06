import { builder } from "../schema";
import { version } from "../../../package.json";

export const VersionQuery = () =>
  builder.queryField("version", (t) =>
    t.string({
      resolve: () => version,
    }),
  );
