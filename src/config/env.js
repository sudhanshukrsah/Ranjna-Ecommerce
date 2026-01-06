/**
 * env.js
 *
 * Purpose:
 * - Centralized environment variable loader
 * - Validates required variables
 * - Fails fast if configuration is invalid
 *
 * NEVER access process.env directly outside this file
 */

import { config } from "dotenv";

config();

/**
 * Helper to require env variables
 */
function requireEnv(key) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return process.env[key];
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",

  PORT: Number(process.env.PORT || 5000),

  // Database
  MONGODB_URI: requireEnv("MONGODB_URI"),

  // Auth
  JWT_ACCESS_SECRET: requireEnv("JWT_ACCESS_SECRET"),
  JWT_REFRESH_SECRET: requireEnv("JWT_REFRESH_SECRET"),

  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN ?? "15m",
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN ?? "7d",

  // Payments (Razorpay)
  RAZORPAY_KEY_ID: requireEnv("RAZORPAY_KEY_ID"),
  RAZORPAY_KEY_SECRET: requireEnv("RAZORPAY_KEY_SECRET"),
};
