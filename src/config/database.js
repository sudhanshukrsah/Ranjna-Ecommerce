/**
 * database.js
 *
 * Purpose:
 * - Centralized MongoDB connection
 * - Handles connection lifecycle
 * - Fails fast on connection errors
 */

import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDatabase() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(env.MONGODB_URI, {
      autoIndex: env.NODE_ENV !== "production",
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
}
