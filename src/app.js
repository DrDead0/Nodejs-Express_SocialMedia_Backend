import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Initialize the app first
const app = express();

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Middleware to parse JSON bodies
app.use(express.json({
    limit: '16Kb'
}));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({
    extended: true,
    limit: '16Kb'
}));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Middleware to parse cookies
app.use(cookieParser());

// Import routes
import userRouter from './routes/user.router.js';

// Set up routes
app.use('/users', userRouter);

// Basic error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Export the app
export { app };
