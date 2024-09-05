import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";
import { config } from "dotenv";
//!note always use .js while importing any file which you made 
dotenv.config({
    path:'./env'
})


connectDB()