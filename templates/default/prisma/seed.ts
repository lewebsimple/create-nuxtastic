import { PrismaClient } from "@prisma/client";
import { prisma } from "./client";
import * as seeds from "./seeds";

export type SeedFn = (prisma: PrismaClient) => Promise<any>;

async function main() {
  for (const key of Object.keys(seeds)) {
    console.log("\n🌱 " + key);
    console.log(await (seeds as Record<string, SeedFn>)[key](prisma));
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
