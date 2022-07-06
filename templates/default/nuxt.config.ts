import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/styles/_main.scss",
    viewer: false,
  },
  vite: { css: { devSourcemap: true } },
});
