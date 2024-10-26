// //? this is the file for cloudinary for file handling and uploading 

// import { v2 as cloudinary } from 'cloudinary';
// import fs from 'fs';

// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         });
//         // console.log("Cloudinary Config:", process.env.CLOUDINARY_NAME, process.env.CLOUDINARY_API_KEY, process.env.CLOUDINARY_API_SECRET);

//         console.log("The file is uploaded successfully:", response.url);
//         return response; // Return the response from Cloudinary
//     } catch (err) {
//         console.error("Error uploading to Cloudinary:", err);
//         fs.unlinkSync(localFilePath); // Clean up the local file on error
//         return null; // Return null if there was an error
//     }
// }

// export { uploadOnCloudinary };


// cloudinary.js
// cloudinary.js - File for handling Cloudinary uploads

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Cloudinary configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Function to upload files to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    if (!localFilePath) {
        console.error("No file path provided for upload.");
        return null; // Early return if no file path is provided
    }

    try {
        // Uploading the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        console.log("The file is uploaded successfully:", response.url);
        return response; // Return the response from Cloudinary
    } catch (err) {
        console.error("Error uploading to Cloudinary:", err);

        // Cleanup: Remove the local file if the upload fails
        try {
            fs.unlinkSync(localFilePath);
            console.log("Local file removed successfully:", localFilePath);
        } catch (unlinkErr) {
            console.error("Error removing local file:", unlinkErr);
        }

        return null; // Return null if there was an error
    }
}

export { uploadOnCloudinary };
