import { Router } from "express";
import { clerkAuth } from "../../middlewares/clerkAuth.middleware.js";
import {
  placeOrder,
  getMyOrders,
  getOrderDetails,
} from "./order.controller.js";

const router = Router();

router.post("/", clerkAuth, placeOrder);
router.get("/", clerkAuth, getMyOrders);
router.get("/:orderId", clerkAuth, getOrderDetails);

export default router;
