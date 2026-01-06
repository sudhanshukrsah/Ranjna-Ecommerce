/**
 * asyncHandler
 *
 * Purpose:
 * - Wraps async route handlers
 * - Automatically forwards errors to error middleware
 */

export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
