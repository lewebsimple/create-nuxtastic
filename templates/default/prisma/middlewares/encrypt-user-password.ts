import { createNestedMiddleware } from "prisma-nested-middleware";
import { encryptPassword } from "~/server/utils/password";

function process(data: any): any {
  data?.password && (data.password = encryptPassword(data.password));
  return data;
}

export const encryptUserPassword = createNestedMiddleware(async (params, next) => {
  if (params.model === "User") {
    switch (params.action) {
      case "create":
      case "update":
      case "updateMany":
        params.args.data = process(params.args.data);
        break;
      case "upsert":
        params.args.create = process(params.args.create);
        params.args.update = process(params.args.update);
        break;
      case "connectOrCreate":
        params.args.create = process(params.args.create);
        break;
      case "createMany":
        params.args.data = params.args.data.map(process);
        break;
    }
  }
  return await next(params);
});
