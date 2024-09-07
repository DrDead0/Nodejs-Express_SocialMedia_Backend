import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async ()=>{
    try{
       const connectionInstances = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n database Connected Successfully at Port:${process.env.PORT} and ${connectionInstances.connection.host}`)
    } catch(error){
        console.log("MongoDb error",error);
        throw error;
        process.exit(1)
    }
}

export default connectDB;