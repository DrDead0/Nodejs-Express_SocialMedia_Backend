import { asyncHandler } from "../utils/asyncHandler.js";
// import { ApiError } from '../utils/apiError.js'
import {user} from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import { apiResponse } from "../utils/apiResponse.js";
import { ApiError } from '../utils/apiError.js';
import mongoose from "mongoose";

const generateAccessAndRefreshToken = async(userId)=>{

    try {
        const userID = await user.findById(userId)
       const accessToken = userID.generateAccessToken()
       const refreshToken = userID.generateRefreshToken()
       userID.refreshToken=refreshToken
      await userID.save({validateBeforeSave: false})
    } catch(error) {
        throw new ApiError(405,"Something went wrong while generating Access Token and Refresh Token")
    }
}

const registerUser = asyncHandler(async(req,res)=>{
    // console.log("Incoming request files:", req.files); //?--> this to get information about the file upload
    //steps
    //get user details form frontend
    //validation (checking user details are they correct and not empty)
    //checking if user already exist:note check using email and username
    //check file :- avatar and images(cover , and pic)
    //upload them at couldinary
    //check image uploaded at cloudniary 
    //create user oject --create entry at db
    // remove password and refresh token filed in response
    //check for user creation 
    //return response 


    // step 2
    // const {fullName,email,username,password} = req.body
    // console.log("email: ",email);
    // if(fullName===""){
    //     throw new apiError(400,"Full Name is required ")
    // }
    const { fullname, email, username, password } = req.body;
    if (
        [fullname,email,username,password].some((field)=>field?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required ")
    }

    const existUser =  await user.findOne({
        $or:[{ username },{ email }]
    })
    if (existUser){
        throw new ApiError(409,"user Already Exist")
    }

   const avatarLocalPath = req.files?.avatar[0]?.path;
//?    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    let coverImageLocalPath;
        if (req.files && req.files.coverImage && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }
   if (!avatarLocalPath){
    throw new ApiError(400,"avatar file is Required")
   }
   
   const avatar = await uploadOnCloudinary(avatarLocalPath)
   const coverImage = await uploadOnCloudinary(coverImageLocalPath)
   if (!avatar || !avatar.url){
    throw new ApiError(400,"avatar file is required")
   }
   const newuser = await user.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "" ,
    email,
    password,
    username: username.toLowerCase()
  })

 const createdUser = await user.findById(newuser._id).select(
    "-password -refreshToken"
 )

 if(!createdUser){
    throw new ApiError(500,"something went wrong while registering the user ")
 }
 return res.status(201).json(
    new apiResponse(200,createdUser,"user Registered successfully ")
 )

})


const loginUser = asyncHandler(async(req,res)=>{

    const{email,password,username} = res.body;
    
    if(!email || !password){
        throw ApiError(404,"email or password is required.!")
    }

    const lUser = await user.findOne({
        $or:[{email},{username}]
    })

    if(!lUser){
        throw new ApiError(400," User not found.!")
    }
    
    if (!isPasswordValid){
        throw new ApiError(401," Invalid Password ")
    }    
    const isPasswordValid =  await lUser.isPasswordCorrect(password)
})
export{registerUser,loginUser}