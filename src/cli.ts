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
});
