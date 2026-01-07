/**
 * server.js
 *
 * Purpose:
 * - Application entry point
 * - Starts the HTTP server
 * - Handles process-level failures
 * - Graceful shutdown handling
 */

import http from "http";
import { env } from "./config/env.js";
import createApp from "./app.js";
import { connectMongo, disconnectMongo } from "./config/database.js";

async function startServer() {
  try {
    await connectMongo();

    const app = createApp();
    const server = http.createServer(app);

    server.listen(env.PORT, () => {
      console.log(`🚀 Server running on port ${env.PORT}`);
    });

    const shutdown = async (signal) => {
      console.log(`\n⚠️ Received ${signal}. Shutting down gracefully...`);

      server.close(async () => {
        await disconnectMongo();
        console.log("✅ Graceful shutdown complete");
        process.exit(0);
      });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  } catch (error) {
    console.error("❌ Fatal error during server startup:", error);
    process.exit(1);
  }
}

startServer();
