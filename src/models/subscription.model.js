import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
        type: Schema.Types.ObjectId, // the one who subscribed 
        ref:"User"
    },
    channel:{
        type: Schema.Types.ObjectId, // who one whom subscriber subscribed 
        ref:"User"
    }
},{timestamps:true})
export const Subscription = mongoose.model("Subscription", subscriptionSchema);
