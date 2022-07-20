import { builder, prisma } from "../schema";

export const UserSchema = () => {
  // User relay node
  builder.prismaNode("User", {
    findUnique: (id) => ({ id: parseInt(id) }),
    id: { resolve: (user) => user.id },
    fields: (t) => ({
      email: t.exposeString("email"),
    }),
  });

  // users query
  builder.queryField("users", (t) =>
    t.prismaConnection({
      type: "User",
      authScopes: { hasUserRole: "EDITOR" },
      cursor: "id",
      totalCount: () => prisma.user.count(),
      resolve: (query, _parent) => prisma.user.findMany({ ...query }),
    }),
  );
};
