const multer = require("multer");

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

const fileFilter = (_, file, cb) => {
  if (!allowedMimeTypes.includes(file.mimetype)) {
    const error = new Error("Unsupported file type. Please upload an image.");
    error.statusCode = 400;
    return cb(error);
  }
  cb(null, true);
};

const storage = multer.memoryStorage();

const multerInstance = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
});

const withSingleImage = (fieldName = "profileImage") => (req, res, next) => {
  const uploader = multerInstance.single(fieldName);
  uploader(req, res, (err) => {
    if (err) {
      console.error("File upload error:", err);
      const message =
        err.message || "Unable to upload file. Please try again later.";
      if (res && typeof res.badRequest === "function") {
        return res.badRequest(message);
      }
      return next(err);
    }
    next();
  });
};

module.exports = {
  upload: multerInstance,
  singleImageUpload: withSingleImage,
};

