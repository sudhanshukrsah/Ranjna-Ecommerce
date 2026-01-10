import User from "../../models/user.model.js";
import { AppError } from "../../utils/AppError.js";

/**
 * Sync Clerk user with internal User collection
 */
export const syncClerkUser = async (clerkUser) => {
  if (!clerkUser?.id) {
    throw new AppError("Invalid Clerk user payload", 400);
  }

  let user = await User.findOne({ clerkId: clerkUser.id });

  if (!user) {
    user = await User.create({
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses?.[0]?.emailAddress || null,
      phone: clerkUser.phoneNumbers?.[0]?.phoneNumber || null,
      role: "CUSTOMER",
      isActive: true,
      isVerified: true,
    });
  }

  return user;
};
