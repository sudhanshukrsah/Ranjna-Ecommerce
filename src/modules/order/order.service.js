import { Order } from "./order.model.js";

export const createOrder = async ({
  userId,
  items,
  address,
  totalAmount,
  notes,
}) => {
  return Order.create({
    userId,
    items,
    shippingAddress: address,
    totalAmount,
    notes,
  });
};

export const getUserOrders = async (userId) => {
  return Order.find({ userId }).sort({ createdAt: -1 });
};

export const getOrderById = async (orderId, userId) => {
  return Order.findOne({ _id: orderId, userId });
};
