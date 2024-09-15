// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from 'cors';


// const app = express();
//  //? this configuration of cors for frontend
// // app.use(cors({
// //     origin: process.env.CORS_ORIGIN,
// //     Credential: true
// // }))

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }));


// //?this is we are doing to use cookie parser, before configuring  cookie parser , we need to configure things
// //? like cookie parser use data which it received ,to first we need to setup how , what and when will the data received data
// //? how can we limit it so that sever don't crash  


// app.use(express.json({
//     limit: "16Kb"
// }))

// //? now we have to setup how we will receive data from url 

// app.use(express.urlencoded({   //? this is for url, this is because some url has % some has %20% to overcome this problem we use
//                                //? third party url encoder.
//     extended: true,
//     limit: "16Kb"
// }))

// //? this the final configuration for storing file which are static, like images and other files  


// app.use(express.static(
//     "public"
// ))
// app.use(cookieParser())

// // routes
// import userRouter from "./routes/user.router.js";


// //routes declaration 

// app.use("/users",userRouter);

// export{app}

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

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

export { app };
