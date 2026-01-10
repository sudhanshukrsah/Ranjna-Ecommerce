import asyncHandler from "../../utils/asyncHandler.js";

/**
 * GET logged-in user profile
 */
export const getMyProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
});

/**
 * UPDATE logged-in user profile
 */
export const updateMyProfile = asyncHandler(async (req, res) => {
  const { name, avatar, addresses } = req.body;

  if (name !== undefined) req.user.name = name;
  if (avatar !== undefined) req.user.avatar = avatar;
  if (addresses !== undefined) req.user.addresses = addresses;

  await req.user.save();

  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    data: req.user,
  });
});
