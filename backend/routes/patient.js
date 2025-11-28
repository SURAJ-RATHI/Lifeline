const express = require("express");
const path = require("path");
const Patient = require("../modal/Patient");
const { authenticate, requireRole } = require("../middleware/auth");
const { body } = require("express-validator");
const { computeAgeFromDob } = require("../utils/date");
const validate = require("../middleware/validate");
const { singleImageUpload } = require("../middleware/upload");
const imagekit = require("../utils/imagekit");


const router = express.Router();

//Get the profile of patient
router.get(
  "/me",
  authenticate,
  requireRole("patient"), async (req, res) => {
    const doc = await Patient.findById(req.user._id).select(
      "-password -googleId"
    );
    res.ok(doc, "Profile fetched");
  }
);

//update patient profile
router.put("/onboarding/update", authenticate, requireRole("patient"), [
  body("name").optional().notEmpty(),
  body("phone").optional().isString(),
  body("dob").optional().isISO8601(),
  body("gender").optional().isIn(['male', 'female', 'other']),
  body("bloodGroup").optional().isString(),

  body("emergencyContact").optional().isObject(),
  body("emergencyContact.name").optional().isString().notEmpty(),
  body("emergencyContact.phone").optional().isString().notEmpty(),
  body("emergencyContact.relationship").optional().isString().notEmpty(),

  body("medicalHistory").optional().isObject(),
  body("medicalHistory.allergies").optional().isString().notEmpty(),
  body("medicalHistory.currentMedications").optional().isString().notEmpty(),
  body("medicalHistory.chronicConditions").optional().isString().notEmpty(),
],validate ,
   async(req,res) => {
    try {
         const updated = {...req.body};

         if(updated.dob){
            updated.age = computeAgeFromDob(updated.dob)
         }
         delete updated.password;
         delete updated.profileImage; // Profile images managed via dashboard upload
         updated.isVerified = true; //Mark profile as verified on update
         const doc = await Patient.findByIdAndUpdate(req.user._id,updated, {new:true}).select('-password -googleId');
         res.ok(doc, 'Profile updated')
    } catch (error) {
        res.serverError("updated failed", [error.message])
    }
   }
 );


router.post(
  "/profile/image",
  authenticate,
  requireRole("patient"),
  singleImageUpload("profileImage"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.badRequest("No profile image provided");
      }
      const fileExtension = path.extname(req.file.originalname || "") || ".jpg";
      const fileName = `patient-${req.user._id}-${Date.now()}${fileExtension}`;
      const uploadResponse = await imagekit.upload({
        file: req.file.buffer,
        fileName,
        folder: "lifeline-doctor",
      });
      const profileImage = uploadResponse.url;
      const updated = await Patient.findByIdAndUpdate(
        req.user._id,
        { profileImage, isVerified: true },
        { new: true }
      ).select("-password -googleId");
      res.ok(updated, "Profile photo updated");
    } catch (error) {
      console.error("Patient profile image upload failed", error);
      res.serverError("Profile photo upload failed", [error.message]);
    }
  }
);

 module.exports = router;