import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import healthRoutes from "./src/routes/healthRoutes.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import pool from "./src/config/db.js";
import taskRoutes from "./src/routes/taskRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/health", healthRoutes);
app.use("/tasks", taskRoutes);
app.use(errorHandler);

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL database"))
  //initialize the task table using the schema from taskModel
  .catch((err) => console.error("Database connection error", err.message));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
