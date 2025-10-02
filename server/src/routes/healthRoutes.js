import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get("/", (req,res) => {
    res.json({
        status: "OK", 
        message: "Server is healthy",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "development",
    });
})

export default router;