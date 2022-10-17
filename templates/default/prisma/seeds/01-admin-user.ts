import type { SeedFn } from "../seed";

export const seedAdminUser: SeedFn = async (prisma) => {
  const user = {
    email: process.env.SEED_ADMIN_EMAIL || "admin@example.com",
    password: process.env.SEED_ADMIN_PASSWORD || "changeme",
  };
  const { email } = await prisma.user.upsert({
    where: { email: user.email },
    create: user,
    update: user,
  });
  return `${email}`;
};
