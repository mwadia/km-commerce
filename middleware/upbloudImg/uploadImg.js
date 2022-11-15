const cloudinary = require("cloudinary");
const { join } = require("path");
const fs = require("fs");
require("dotenv").config();


const cloudUpload = (req, res, next) => {
   // after handled file using multer, we take the name
   let imgName;
   if (req.file) {
     imgName = req.file.filename;
     cloudinary.config({
       cloud_name: process.env.CLOUD_NAME,
       api_key: process.env.CLOUD_API_KEY,
       api_secret: process.env.CLOUD_API_SECRET,
     });
     // After uploaded Image locally we uploaded it into our cloud
     cloudinary.v2.uploader.upload(join(__dirname, '..', 'uploads', imgName))
       .then((result) => {
         req.fileUrl = result.url;
         next();
       });
   } else {
     next();
   }
  }
 


module.exports = cloudUpload;