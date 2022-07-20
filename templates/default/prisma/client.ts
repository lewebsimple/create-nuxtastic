import Prisma, * as PrismaScope from "@prisma/client";
import * as middlewares from "./middlewares";

// Re-export ESM PrismaClient and prisma instance
export const { PrismaClient } = Prisma || PrismaScope;
export const prisma = new PrismaClient();

// Apply all Prisma middlewares
Object.keys(middlewares).forEach((key) => {
  // @ts-expect-error Prisma.Middleware unavailable in ESM
  prisma.$use(middlewares[key]);
});

// Helper: Apply Prisma middleware recursively
// @see https://github.com/prisma/prisma/issues/4211#issuecomment-899737075
export async function applyRecursive(data: any, keyToModify: string, cb: (data: any) => void): Promise<void> {
  if (typeof data !== "object") {
    return;
  }
  await Promise.all(
    Object.keys(data).map(async (key: string) => {
      if (keyToModify === key) {
        data[key] = await cb(data);
      }
      if (typeof data[key] === "object") {
        await applyRecursive(data[key], keyToModify, cb);
      }
    }),
  );
}
