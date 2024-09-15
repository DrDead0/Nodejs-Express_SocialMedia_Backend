import { asyncHandler } from "../utils/asyncHandler.js";

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
    const {fullName,email,username,password} = req.body
    console.log("email: ",email);

})

export{registerUser}