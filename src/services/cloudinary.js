import { v2 as cloudinary } from "cloudinary";

// Configure with your credentials
cloudinary.config({
  cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
  secure: true,
});

// Upload file to Cloudinary
export const uploadFile = async (file) => {
  try {
    const response = await cloudinary.uploader.upload(file, {
      resource_type: "auto", // Auto-detect ZIP/image
      folder: "squid-templates",
      use_filename: true,
    });
    return {
      publicId: response.public_id,
      url: response.secure_url,
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
};

// Generate time-limited secure URL for downloads
export const generateSecureUrl = (publicId) => {
  return cloudinary.url(publicId, {
    secure: true,
    sign_url: true,
    expires_at: Math.floor(Date.now() / 1000) + 3600, // 1-hour expiry
  });
};

// Delete file (for admin use)
export const deleteFile = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
    return true;
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    return false;
  }
};
