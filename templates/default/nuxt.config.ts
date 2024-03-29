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
  modules: ["@formkit/nuxt", "@kevinmarrec/nuxt-pwa", "@lewebsimple/nuxt3-svg", "@nuxtjs/tailwindcss"],
  publicRuntimeConfig: {
    graphqlHttpEndpoint: process.env.GRAPHQL_HTTP_ENDPOINT || "http://localhost:3000/api/graphql",
  },
  pwa: {
    manifest: {
      name: "{{name}}",
      short_name: "{{name}}",
      description: "{{description}}",
    },
  },
  tailwindcss: {
    cssPath: "~/assets/styles/_main.scss",
    viewer: false,
  },
  vite: { css: { devSourcemap: true } },
});
