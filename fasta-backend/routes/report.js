/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const express = require("express");
const mongoose = require("mongoose");


const router = express.Router();
const Reports = require("../models/report");
const authChecker = require("../middlewares/authChecker");
const Trip = require("../models/trip");


router.post("/report", authChecker, async (req, res) => {
  const {
    type, description, location, tripId
  } = req.body;

  if (!type || !description || !location) {
    return res.status(403).json({ response: "please all fields are required" });
  }
  try {
    const reportDetails = {
      tripId,
      type,
      description,
      location
    };
    const reports = await Reports.create(reportDetails);
    if (reports) {
      return res.status(200).json({ response: `${reports} Thanks for giving, your report has been saved` });
    }
  } catch (error) {
    return res.status(500).json({ response: `oopss, Error: ${error} occured` });
  }
});

// get all reports from the DB
router.get("/reports", authChecker, async (req, res) => {
  await Reports.find()
    .populate("tripId")
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

// get one reports from the database
router.get("/reports/:id", authChecker, async (req, res) => {
  // console.log(req.params.id);
  await Reports.findById(req.params.id)
    .populate("tripId")
    .select("_id type description location date")
    .exec()
    .then((report) => {
      if (!report || report < 1) {
        return res.status(404).json({ response: "This report doesn't exist anymore" });
      }
      res.status(200).json({
        response: {
          id: report._id,
          trip: report.tripId._id,
          type: report.type,
          description: report.description,
          location: report.location,
          date: report.date
        }
      });
    })
    .catch((e) => {
      res.status(500).json({ e: e.message });
    });
});


module.exports = router;
