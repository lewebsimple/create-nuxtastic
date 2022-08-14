import { PrismaClient } from "@prisma/client";
import { prisma } from "./client";
import * as seeds from "./seeds";

export type SeedFn = (prisma: PrismaClient) => Promise<any>;

async function main() {
  for (const seed of Object.values(seeds)) {
    console.log(await (seed as SeedFn)(prisma));
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
