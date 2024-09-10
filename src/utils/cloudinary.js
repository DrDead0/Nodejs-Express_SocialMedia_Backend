//? this is the file for cloudinary for file handling and uploading 

import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';

import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async ()=>{
    try{
        cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
            
        })
        console.log("the file is uploaded Successfully..!",response.url);
        return response;
    }catch(err){
        fs.unlinkSync(localFilePath)
        return null;
    }
}


export{ uploadOnCloudinary}