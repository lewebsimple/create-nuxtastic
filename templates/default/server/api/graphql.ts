import { createServer } from "@graphql-yoga/node";
import { initContextCache } from "@pothos/core";
import { schema } from "~/server/graphql/schema";

export default defineEventHandler(async (event) => {
  const server = createServer({
    context: { ...initContextCache() },
    graphiql: { defaultQuery: `{ version }`, endpoint: "/api/graphql" },
    schema,
  });
  return server.handle(event.req, event.res);
});
