import type { Prisma } from "@prisma/client";
import { applyRecursive } from "../client";
import { encryptPassword } from "../../server/utils/password";

// Always encrypt User.password
export const encryptPasswordMiddleware: Prisma.Middleware = async (params, next) => {
  if (params.model === "User" && ["create", "createMany", "update", "updateMany", "upsert"].includes(params.action)) {
    await applyRecursive(params.args, "password", (data) => encryptPassword(data.password));
  }
  return next(params);
};
