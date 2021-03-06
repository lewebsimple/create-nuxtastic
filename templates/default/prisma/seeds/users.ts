import { PrismaClient, UserRole } from "@prisma/client";
import { SeedFn } from "../seed";

export const seedUsers: SeedFn = async (prisma: PrismaClient) => {
  // Default admin user
  const admin = {
    email: process.env.SEED_ADMIN_EMAIL || "admin@example.com",
    password: process.env.SEED_ADMIN_PASSWORD || "changeme",
    role: UserRole.ADMIN,
  };
  return await prisma.user.upsert({
    where: { email: admin.email },
    create: admin,
    update: admin,
  });
};
