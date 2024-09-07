import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';


const app = express();
 //? this configuration of cors for frontend
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

//?this is we are doing to use cookie parser, before configuring  cookie parser , we need to configure things
//? like cookie parser use data which it received ,to first we need to setup how , what and when will the data received data
//? how can we limit it so that sever don't crash  


app.use(express.json({
    limit: "16Kb"
}))

//? now we have to setup how we will receive data from url 

app.use(express.urlencoded({   //? this is for url, this is because some url has % some has %20% to overcome this problem we use
                               //? third party url encoder.
    extended: true,
    limit: "16Kb"
}))

//? this the final configuration for storing file which are static, like images and other files  


app.use(express.static(
    "public"
))
app.use(cookieParser())

export{app}