import { Router } from "express";
import { clerkAuth } from "../../middlewares/clerkAuth.middleware.js";
import {
  addAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
} from "./address.controller.js";

const router = Router();

router.post("/", clerkAuth, addAddress);
router.get("/", clerkAuth, getAddresses);
router.put("/:addressId", clerkAuth, updateAddress);
router.delete("/:addressId", clerkAuth, deleteAddress);

export default router;
