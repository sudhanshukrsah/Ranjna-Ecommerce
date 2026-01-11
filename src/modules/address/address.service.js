import { Address } from "./address.model.js";

export const createAddress = async (userId, payload) => {
  if (payload.isDefault) {
    await Address.updateMany(
      { userId },
      { $set: { isDefault: false } }
    );
  }

  return Address.create({ userId, ...payload });
};

export const getUserAddresses = async (userId) => {
  return Address.find({ userId }).sort({ isDefault: -1, createdAt: -1 });
};

export const updateAddress = async (addressId, userId, payload) => {
  if (payload.isDefault) {
    await Address.updateMany(
      { userId },
      { $set: { isDefault: false } }
    );
  }

  return Address.findOneAndUpdate(
    { _id: addressId, userId },
    payload,
    { new: true }
  );
};

export const deleteAddress = async (addressId, userId) => {
  return Address.findOneAndDelete({ _id: addressId, userId });
};
