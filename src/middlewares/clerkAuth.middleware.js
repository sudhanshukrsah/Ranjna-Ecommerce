import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { AppError } from "../utils/AppError.js";

/**
 * Clerk Authentication Middleware
 * Verifies Clerk session token from frontend
 */
export const clerkAuth = ClerkExpressRequireAuth({
  onError: () => {
    throw new AppError("Unauthorized access", 401);
  },
});
