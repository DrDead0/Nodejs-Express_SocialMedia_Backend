import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";
import { config } from "dotenv";
import { app } from './app.js';
//!note always use .js while importing any file which you made 
dotenv.config({
    path:'./env'
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3030, () => {
            console.log(`Server is running on port ${process.env.PORT || 3030}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed", error);
    });
