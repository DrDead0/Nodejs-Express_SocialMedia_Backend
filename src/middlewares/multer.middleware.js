import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
     
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ 
    storage, 
})





//the below code is for the time when public/temp is not there. in that case multer should check if the 
// public temp as a local file exist or not hence we should keep it in mind'
//! the below code is only for that
// import multer from "multer";
// import path from 'path';
// import fs from 'fs';

// // Create the public/temp directory if it doesn't exist
// const tempDir = path.join(__dirname, './public/temp');
// if (!fs.existsSync(tempDir)) {
//     fs.mkdirSync(tempDir, { recursive: true });
// }

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, tempDir); // Use the defined directory
//     },
//     filename: function (req, file, cb) {
//         // Create a unique filename to prevent overwriting
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, uniqueSuffix + '-' + file.originalname);
//     }
// });

// export const upload = multer({ 
//     storage 
// });
