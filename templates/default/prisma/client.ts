import Prisma, * as PrismaScope from "@prisma/client";

// Re-export ESM PrismaClient and prisma instance
export const { PrismaClient } = Prisma || PrismaScope;
export const prisma = new PrismaClient();

// Apply all Prisma middlewares
import * as middlewares from "./middlewares";
for (const middleware of Object.values(middlewares)) {
  prisma.$use(middleware);
}
