import { syncClerkUser } from "../modules/auth/userSync.service.js";

/**
 * Attaches internal user document to req.user
 */
export const attachUser = async (req, res, next) => {
  try {
    const clerkUser = req.auth?.user;

    const user = await syncClerkUser(clerkUser);

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
