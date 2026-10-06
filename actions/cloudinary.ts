"use server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(formData: FormData) {
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return {
      success: false,
      error: "No file provided",
    };
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "blog",
          },
          (error, result) => {
            if (error || !result) {
              reject(error);
              return;
            }

            resolve(result as { secure_url: string });
          },
        );

        uploadStream.end(buffer);
      },
    );

    return {
      success: true,
      url: result.secure_url,
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);

    return {
      success: false,
      error: "Failed to upload file",
    };
  }
}
