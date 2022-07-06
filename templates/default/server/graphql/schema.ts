import SchemaBuilder from "@pothos/core";
import * as types from "./types";

export const builder = new SchemaBuilder({});

// Execute imported types
for (const type of Object.values(types)) {
  type();
}

// Create default Query / Mutation / Subscription
builder.queryType({});
//builder.mutationType({});
//builder.subscriptionType({});

export const schema = builder.toSchema({});
