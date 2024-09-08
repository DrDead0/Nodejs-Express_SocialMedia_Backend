import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs/dist/bcrypt";
import jsonwebtoken from "jsonwebtoken";
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName:{
            type: String,
            required: true,
            trim: true,
            index:true
        },
        avatar:{
            type: String, //cloudnary  
            required: true,
        },
        coverImage:{
            type: String, //cloudnary.  
        },
        watchHistory:[
            {
                 type:Schema.Types.ObjectId,
                 ref: "video"
            }    
        ],
        password:{
            type: String,
            required: [true, 'password is required']
        },
        refreshToken:{
            type: String
        }
    },
    {
        timestamps:true
    }
)
export const user = mongoose.model("User",userSchema);