import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ["@urql/vue"],
  },
  components: {
    dirs: [
      { path: "~/components", extensions: ["svg", "vue"] },
      { path: "node_modules/@fortawesome/fontawesome-free/svgs/regular", extensions: ["svg"], prefix: "Icon" },
    ],
  },
  graphqlCodegen: { devOnly: true },
  modules: ["@lewebsimple/nuxt3-svg", "@nuxtjs/tailwindcss", "nuxt-graphql-codegen"],
  publicRuntimeConfig: {
    graphqlHttpEndpoint: process.env.GRAPHQL_HTTP_ENDPOINT || "http://localhost:3000/api/graphql",
  },
  tailwindcss: {
    cssPath: "~/assets/styles/_main.scss",
    viewer: false,
  },
  vite: { css: { devSourcemap: true } },
});
