import React from "react";
import cloudinary from "cloudinary";

const cloudinary = cloudinary.v2;
cloudinary.config({
  cloud_name: ProcessingInstruction.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
});

export default cloudinary;
