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

router.get("/reports", authChecker, async (req, res) => {
  await Reports.find()
    .select("_id type description location date")
    .exec()
    .then((allReports) => {
      if (!allReports || allReports < 1) {
        return res.status(404).json({ response: "unfortunetly, we dont have any reports for you, check back" });
      }
      res.status(200).json({ response: allReports.reverse() });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});
module.exports = router;
