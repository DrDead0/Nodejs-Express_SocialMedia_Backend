import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from '../utils/apiError.js'
import {user} from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import { apiResponse } from "../utils/apiResponse.js";
const registerUser = asyncHandler(async(req,res)=>{
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

    if (
        [fullName,email,username,password].some((field)=>field?.trim()==="")
    ){
        throw new apiError(400,"All fields are required ")
    }

    const existUser =  await user.findOne({
        $or:[{ username },{ email }]
    })
    if (existUser){
        throw new apiError(409,"user Already Exist")
    }

   const avatarLocalPath = req.files?.avatar[0]?.path;
   const coverImageLocalPath = req.files?.coverImage[0]?.path;
   if (!avatarLocalPath){
    throw new apiError(400,"avatar file is Required")
   }

   const avatar = await uploadOnCloudinary(avatarLocalPath)
   const coverImage = await uploadOnCloudinary(coverImageLocalPath)
   if (!avatar){
    throw new apiError(400,"avatar file is required")
   }
   const user = await user.create({
    fullName,
    avatar: avatar.url,
    coverIamge: coverImage?.url || "" ,
    email,
    password,
    username: username.toLowerCase()
  })

 const createdUser = user.findById(user._id).select(
    "-password -refreshToken"
 )

 if(!createdUser){
    throw new apiError(500,"something went wrong while registering the user ")
 }
 return res.status(201).json(
    new apiResponse(200,createdUser,"user Registered successfully ")
 )

})

export{registerUser}