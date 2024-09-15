import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from './constant.js';
import connectDB from './db/index.js';
import { app } from './app.js';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

connectDB()
    .then(() => {
        app.listen(process.env.PORT ||5200, () => {
            console.log(`Server is running on port ${process.env.PORT || 5200}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed", error);
    });
