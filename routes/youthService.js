const express = require("express");
const router = express.Router();
const YouthService = require("../models/YouthServices");

// Submit form
router.post("/submit", async (req, res) => {
  try {
    const formData = new YouthService(req.body);
    const savedData = await formData.save();
    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: savedData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting form",
      error: error.message,
    });
  }
});

// Get all submissions
router.get("/submissions", async (req, res) => {
  try {
    const submissions = await YouthService.find().sort({ submissionDate: -1 });
    res.status(200).json({
      success: true,
      data: submissions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving submissions",
      error: error.message,
    });
  }
});
router.get("/submissions/:id", async (req, res) => {
  try {
    const submission = await YouthService.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: "Submission not found",
      });
    }
    res.status(200).json({
      success: true,
      data: submission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving submission",
      error: error.message,
    });
  }
});

module.exports = router;
