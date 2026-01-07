/**
 * app.js
 *
 * Purpose:
 * - Creates and configures the Express application
 * - Registers global middleware
 * - Does NOT start the server (important for testability)
 */
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./config/env.js";

function createApp() {
  const app = express();

  /* ----------------------------------
   * Global Security Middleware
   * ---------------------------------- */
  app.use(helmet());

  /* ----------------------------------
   * CORS Configuration
   * ---------------------------------- */
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );

  /* ----------------------------------
   * Request Body Parsing
   * ---------------------------------- */
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true }));

  /* ----------------------------------
   * HTTP Request Logging
   * ---------------------------------- */
  if (env.NODE_ENV !== "test") {
    app.use(morgan("dev"));
  }

  /* ----------------------------------
   * Health Check Endpoint
   * ---------------------------------- */
  app.get("/health", (req, res) => {
    res.status(200).json({
      status: "ok",
      uptime: process.uptime(),
      environment: env.NODE_ENV,
      timestamp: new Date().toISOString(),
    });
  });

  /* ----------------------------------
   * 404 Handler (Unknown Routes)
   * ---------------------------------- */
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: "Route not found",
    });
  });

  /* ----------------------------------
   * Global Error Handler (Must be last)
   * ---------------------------------- */
  app.use(globalErrorHandler);

  return app;
}

export default createApp;
