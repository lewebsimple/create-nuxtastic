import { CompatibilityEvent } from "h3";
import { CookieSerializeOptions } from "cookie-es";
import jwt, { SignOptions } from "jsonwebtoken";
import { authStateSchema, AuthState } from "./auth-state";

const jwtSecretKey = process.env.JWT_SECRET_KEY || "jwtsecretkey";

// Helper: Decode AuthState from JWT cookie
export function decodeJwt(token: string): AuthState {
  try {
    const auth = jwt.verify(token, jwtSecretKey) as AuthState;
    return authStateSchema.parse(auth);
  } catch (error) {
    return { user: null };
  }
}

// JWT cookie settings
export const jwtCookieName = process.env.JWT_COOKIE_NAME || "jwt";
const jwtSignOptions: SignOptions = { expiresIn: "2h" };
const jwtCookieOptions: CookieSerializeOptions = { path: "/", httpOnly: true };

// Set AuthState by updating JWT cookie in event response
export function setAuthState(auth: AuthState, event: CompatibilityEvent): AuthState {
  const result = authStateSchema.safeParse(auth);
  auth = result.success ? result.data : { user: null };
  const token = jwt.sign(auth, jwtSecretKey, jwtSignOptions);
  setCookie(event, jwtCookieName, token, jwtCookieOptions);
  return auth;
}
