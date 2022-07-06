import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: {
    dirs: [
      { path: "~/components", extensions: ["svg", "vue"] },
      { path: "node_modules/@fortawesome/fontawesome-free/svgs/regular", extensions: ["svg"], prefix: "Icon" },
    ],
  },
  modules: ["@lewebsimple/nuxt3-svg", "@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/styles/_main.scss",
    viewer: false,
  },
  vite: { css: { devSourcemap: true } },
});
