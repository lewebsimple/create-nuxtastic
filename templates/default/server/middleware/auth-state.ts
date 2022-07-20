import { initAuthState } from "../utils/auth-state";

// Provide AuthState in event context
export default defineEventHandler(async (event) => {
  event.context.auth = await initAuthState(event.req);
});
