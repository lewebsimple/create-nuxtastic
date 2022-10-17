#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "../templates");

create("create-nuxtastic", {
  templateRoot,
  defaultDescription: "A fantastic Nuxt3 application",
  caveat: ({ packageDir }) => {
    console.log(`cd ${packageDir} && yarn dev`);
  },
  extra: {
    dbhost: { type: "input", describe: "Postgres hostname", default: "localhost", prompt: "if-no-arg" },
    dbport: { type: "input", describe: "Postgres port", default: "5432", prompt: "if-no-arg" },
    dbuser: { type: "input", describe: "Postgres username", default: "postgres", prompt: "if-no-arg" },
    dbpass: { type: "input", describe: "Postgres password" },
    dbname: { type: "input", describe: "Postgres database" },
    seedemail: { type: "input", describe: "Admin email", default: "admin@example.com", prompt: "if-no-arg" },
    seedpass: { type: "input", describe: "Admin password", default: "changeme", prompt: "if-no-arg" },
  },
});
