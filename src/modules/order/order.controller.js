import asyncHandler from "../../utils/asyncHandler.js";
import * as orderService from "./order.service.js";

export const placeOrder = asyncHandler(async (req, res) => {
  const { userId } = req.auth;
  const { items, address, totalAmount, notes } = req.body;

  const order = await orderService.createOrder({
    userId,
    items,
    address,
    totalAmount,
    notes,
  });

  res.status(201).json({
    success: true,
    data: order,
  });
});

export const getMyOrders = asyncHandler(async (req, res) => {
  const { userId } = req.auth;

  const orders = await orderService.getUserOrders(userId);

  res.json({
    success: true,
    data: orders,
  });
});

export const getOrderDetails = asyncHandler(async (req, res) => {
  const { userId } = req.auth;
  const { orderId } = req.params;

  const order = await orderService.getOrderById(orderId, userId);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json({
    success: true,
    data: order,
  });
});
