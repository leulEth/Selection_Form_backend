const mongoose = require("mongoose");

const youthServiceSchema = new mongoose.Schema({
  // Personal Information
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  christianName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    day: Number,
    month: Number,
    year: Number,
  },
  gender: {
    type: String,
    enum: ["ወንድ", "ሴት"],
    required: true,
  },
  emergencyContactName: {
    type: String,
    required: true,
  },
  emergencyContactPhone: {
    type: String,
    required: true,
  },
  spiritualFatherName: {
    type: String,
    required: true,
  },
  spiritualFatherChurch: {
    type: String,
    required: true,
  },

  // Address Information
  address: {
    subcity: String,
    district: String,
    kebele: String,
    houseNumber: String,
  },

  // Education/Employment Information
  isStudent: Boolean,
  studyType: String,
  educationLevel: String,
  specialSkills: String,
  isEmployed: Boolean,
  employmentType: String,
  workplace: String,
  jobRole: String,

  // Church Background
  knowsOtherChurch: Boolean,
  otherChurchName: String,
  yearJoinedChurch: Number,
  courseLevel: Number,
  previouslyAttended: Boolean,
  previousDepartment: String,
  howJoinedCourse: String,

  // Service Preferences
  availableTimes: String,
  servicePreferences: [
    {
      department: String,
      rank: Number,
    },
  ],

  // Metadata
  submissionDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("YouthService", youthServiceSchema);
