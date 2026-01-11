import asyncHandler from "../../utils/asyncHandler.js";
import * as addressService from "./address.service.js";

export const addAddress = asyncHandler(async (req, res) => {
  const { userId } = req.auth;
  const address = await addressService.createAddress(userId, req.body);

  res.status(201).json({
    success: true,
    data: address,
  });
});

export const getAddresses = asyncHandler(async (req, res) => {
  const { userId } = req.auth;
  const addresses = await addressService.getUserAddresses(userId);

  res.json({
    success: true,
    data: addresses,
  });
});

export const updateAddress = asyncHandler(async (req, res) => {
  const { userId } = req.auth;
  const { addressId } = req.params;

  const updated = await addressService.updateAddress(
    addressId,
    userId,
    req.body
  );

  res.json({
    success: true,
    data: updated,
  });
});

export const deleteAddress = asyncHandler(async (req, res) => {
  const { userId } = req.auth;
  const { addressId } = req.params;

  await addressService.deleteAddress(addressId, userId);

  res.json({
    success: true,
    message: "Address deleted successfully",
  });
});
