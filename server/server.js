import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import healthRoutes from './src/routes/healthRoutes.js';
import { errorHandler } from "./src/middlewares/errorHandler.js";   

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use('/health', healthRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});


