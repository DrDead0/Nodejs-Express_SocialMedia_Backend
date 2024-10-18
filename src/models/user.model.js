import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
// import bcrypt from 'bcryptjs'; // Use 'bcryptjs' if you installed this package

import jsonwebtoken from "jsonwebtoken"; //? directly using is not possible , so we use hook of mongoose , mainly pre
//? pre --> help work like middleware were it will run before going to production  
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
        fullname:{
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
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()  //? Condition to only run bcrypt when password changed not every time.
    
    this.password =await bcrypt.hash(this.password,10)
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
     await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    }, 
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)}

userSchema.methods.generateRefreshToken =function(){
    return jwt.sign({
        _id: this._id
    }, 
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)}

export const user = mongoose.model("User",userSchema);