import express from "express";
import userRoutes from "../modules/user/user.routes.js";
import addressRoutes from "../modules/address/address.routes.js";
import orderRoutes from "../modules/order/order.routes.js";

const router = express.Router();

/**
 * API Health Check
 */
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running",
  });
});

router.use("/users", userRoutes);
router.use("/addresses", addressRoutes);
router.use("/orders", orderRoutes);

export default router;
