const express = require("express");

const router = express.Router();
const Reports = require("../models/report");
const authChecker = require("../middlewares/authChecker");


router.post("/report", authChecker, async (req, res) => {
  const {
    type, description, location
  } = req.body;

  if (!type || !description || !location) {
    return res.status(403).json({ response: "please all fields are required" });
  }
  try {
    const reportDetails = {
      type,
      description,
      location
    };
    const reports = await Reports.create(reportDetails);
    if (reports) {
      return res.status(200).json({ response: "Thanks for giving, your report has been saved" });
    }
  } catch (error) {
    return res.status(500).json({ response: `oopss, Error: ${error} occured` });
  }
});

module.exports = router;
