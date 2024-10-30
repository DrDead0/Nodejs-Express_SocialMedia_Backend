import { asyncHandler } from "../utils/asyncHandler.js";
import { jwt } from "jsonwebtoken";
import { User } from "../models/user.model.js"
import { apiError } from "../utils/apiError";
// import jwt form "jsonwebtoken";

export const verifyJWT =  asyncHandler(async(req,res,next)=>
    {
   try {
    const Token = req.cookies?.accessToken || req.header("authorization")?.replace("Bearer","")
 
    if(!Token){
     throw new apiError(401,"Unauthorized Request or Credentials ")
 }
 const decodedToken = jwt.verify(Token, Process.env.ACCESS_TOKEN_SECRET)

 const user =await User.findById(
     decodedToken?._id
 ).select("-password  -refreshToken")
 if(!user){
     
     throw new apiError(401,"Invalid Access Token")
 }
 res.user=user;
 next()
   } catch (error) {
    throw new apiError(500, error?.message || "There was something wrong with authentication ")
   }
})

