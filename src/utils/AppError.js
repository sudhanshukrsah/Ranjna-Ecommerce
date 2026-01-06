/**
 * AppError
 *
 * Purpose:
 * - Represents operational (expected) errors
 * - Standardizes error shape across the application
 */

export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
