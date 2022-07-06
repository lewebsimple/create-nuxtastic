import consola from "consola";
import urql, { cacheExchange, dedupExchange, fetchExchange, ssrExchange } from "@urql/vue";

export default defineNuxtPlugin((nuxtApp) => {
  const { graphqlHttpEndpoint } = useRuntimeConfig();

  if (!graphqlHttpEndpoint) {
    consola.warn("Could not initialize @urql/vue client (missing graphqlHttpEndpoint)");
    return;
  }

  // Create SSR exchange
  const ssr = ssrExchange({
    isClient: process.client,
  });

  // Extract SSR payload on the server
  if (process.server) {
    nuxtApp.hook("app:rendered", () => {
      nuxtApp.payload?.data && (nuxtApp.payload.data.urql = ssr.extractData());
    });
  }

  // Restore SSR payload on the client
  if (process.client) {
    nuxtApp.hook("app:created", () => {
      nuxtApp.payload?.data && ssr.restoreData(nuxtApp.payload.data.urql);
    });
  }

  // Custom exchanges
  const exchanges = [dedupExchange, cacheExchange, ssr, fetchExchange];

  nuxtApp.vueApp.use(urql, {
    url: graphqlHttpEndpoint,
    exchanges,
  });
});
