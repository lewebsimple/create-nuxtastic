import { setAuthState } from "../utils/jwt";

export default defineEventHandler((event) => setAuthState({ user: null }, event));
