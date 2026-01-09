import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    // upload the file on cloudinary
    const uploadResult = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    // file has been uploaded sucessfully
    console.log("file is uploaded on cloudinary", uploadResult.url);
    return uploadResult;
  } catch (error) {
    fs.unlinkSync(localfilepath)  //remove the locally save temporary file as the upload operation got failed 
    return null;
  }
};


export {uploadOnCloudinary}

// this we got from the documentation for temporary purpose
// //  Upload an image
// const uploadResult = await cloudinary.uploader
//   .upload(
//     "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//     {
//       public_id: "shoes",
//     }
//   )
//   .catch((error) => {
//     console.log(error);
//   });
