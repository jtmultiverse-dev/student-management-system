import app from "./app.js";
import prisma from "./config/prisma.js";

const PORT = 5002;

async function startServer() {
  try {
    await prisma.$connect();

    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
}

startServer();