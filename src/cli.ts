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
    dbhost: { type: "input", describe: "MySQL hostname", default: "localhost", prompt: "if-no-arg" },
    dbport: { type: "input", describe: "MySQL port", default: "3306", prompt: "if-no-arg" },
    dbuser: { type: "input", describe: "MySQL username", default: "root", prompt: "if-no-arg" },
    dbpass: { type: "input", describe: "MySQL password" },
    dbname: { type: "input", describe: "MySQL database" },
    seedemail: { type: "input", describe: "Admin email", default: "admin@example.com", prompt: "if-no-arg" },
    seedpass: { type: "input", describe: "Admin password", default: "changeme", prompt: "if-no-arg" },
  },
});
