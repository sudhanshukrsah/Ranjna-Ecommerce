import express from "express";
import userRoutes from "../modules/user/user.routes.js";

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

export default router;
