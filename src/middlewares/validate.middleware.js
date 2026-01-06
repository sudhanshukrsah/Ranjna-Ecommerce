/**
 * validate.middleware.js
 *
 * Purpose:
 * - Validates request data against Zod schemas
 * - Prevents invalid input from reaching controllers
 */

import { AppError } from "../utils/AppError.js";

export const validate =
  (schema, property = "body") =>
  (req, res, next) => {
    const result = schema.safeParse(req[property]);

    if (!result.success) {
      const message = result.error.errors
        .map((err) => err.message)
        .join(", ");

      return next(new AppError(message, 400));
    }

    req[property] = result.data;
    next();
  };
