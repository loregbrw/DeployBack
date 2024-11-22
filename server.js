import AppDataSource from "./data-source.js";
import app from "./app.js";

import "dotenv/config";

const serverFacade = async () => {
    await AppDataSource.initialize();
    console.log("\nData source connected.");

    const PORT = Number(process.env.APP_PORT) || 3000;

    app.listen(PORT, () => {
        console.log(`\nServer executing on http://localhost:${PORT}/`);
    });
    
    process.on("SIGTERM", async () => {
        console.log("\nShutting down...");
        await AppDataSource.destroy();
        console.log("Data source disconnected.");
        process.exit(0);
    });
}

serverFacade();
