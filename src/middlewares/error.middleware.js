/**
 * Global Error Handling Middleware
 *
 * Purpose:
 * - Centralizes all error responses
 * - Prevents sensitive data leaks
 */

import { AppError } from "../utils/AppError.js";
import { env } from "../config/env.js";

/* ----------------------------------
 * Global Error Handler
 * ---------------------------------- */
export function globalErrorHandler(err, req, res, next) {
  let error = err;

  // Normalize unknown errors
  if (!(error instanceof AppError)) {
    error = new AppError("Internal Server Error", 500);
  }

  // Development: full error details
  if (env.NODE_ENV === "development") {
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
      stack: err.stack,
    });
  }

  // Production: safe response
  return res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
}
