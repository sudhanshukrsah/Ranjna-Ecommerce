import express from "express";
import { clerkAuth } from "../../middlewares/clerkAuth.middleware.js";
import { attachUser } from "../../middlewares/attachUser.middleware.js";
import {
  getMyProfile,
  updateMyProfile,
} from "./user.controller.js";

const router = express.Router();

router.get("/me", clerkAuth, attachUser, getMyProfile);
router.put("/me", clerkAuth, attachUser, updateMyProfile);

export default router;
