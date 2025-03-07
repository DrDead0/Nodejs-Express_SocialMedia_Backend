//* this is for exporting methods which will be created here 
//? the below code is using promises method

const asyncHandler = (requestHandler)=>{

   return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>{
             next(err)
        })
    }

}

//! the above code is simple and easy to execute.
export{asyncHandler}
//? the below code is for try and catch method 
// const asyncHandler = (func)=> async (req,res,next)=>{    //* this is for try and catch type 
//     try{

//         await func(req, res, next)

//     }catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
        
//     }
// }