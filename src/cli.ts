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
    dbhost: { type: "input", describe: "MySQL hostname", default: "localhost" },
    dbport: { type: "input", describe: "MySQL port", default: "3306" },
    dbuser: { type: "input", describe: "MySQL username", default: "root" },
    dbname: { type: "input", describe: "MySQL database" },
    seedemail: { type: "input", describe: "Admin email", default: "admin@example.com" },
    seedpass: { type: "input", describe: "Admin password", default: "changeme" },
  },
});
