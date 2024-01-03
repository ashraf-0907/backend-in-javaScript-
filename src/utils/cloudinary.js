import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import * as dotenv from 'dotenv'
dotenv.config()


const cloudname = process.env.CLOUDINARY_CLOUD_NAME
const apikey= process.env.CLOUDINARY_API_KEY
const apisecret = process.env.CLOUDINARY_API_SECRET

 console.log(cloudname.length);
          
cloudinary.config({ 
  cloud_name: cloudname, 
  api_key: apikey,
  api_secret: apisecret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        console.log(CLOUDINARY_CLOUD_NAME);
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}