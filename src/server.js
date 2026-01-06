/**
 * server.js
 *
 * Purpose:
 * - Application entry point
 * - Starts the HTTP server
 * - Handles process-level failures
 */

import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { connectDatabase } from "./config/database.js";

const PORT = env.PORT;

async function startServer() {
  try {
    await connectDatabase();

    const app = createApp();

    app.listen(PORT, () => {
      console.log(`🚀 Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Fatal error during server startup:", error);
    process.exit(1);
  }
}

startServer();
