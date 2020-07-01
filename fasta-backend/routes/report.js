/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const express = require("express");
// const Geocoding = require("reverse-geocoding");
const axios = require("axios");


const router = express.Router();
const Reports = require("../models/report");
const authChecker = require("../middlewares/authChecker");


router.post("/report", authChecker, async (req, res) => {
  const {
    type, description, location, tripId
  } = req.body;

  if (!type || !description || !location) {
    return res.status(403).json({ response: "please all fields are required" });
  }
  try {
    const { lat, long } = location;
    let address;
    await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.TEST_KEY}`
    ).then((data) => {
      if (data.data) {
        if (data.data.status === "OK") {
          // console.log(data.data.results[0].formatted_address);
          address = data.data.results[0].formatted_address;
        } else {
          // console.log("error");
          throw new Error();
        }
      }
      // console.log("rubbish");
    }).catch((e) => e);

    const reportDetails = {
      tripId,
      type,
      description,
      location,
      address
    };
    const reports = await Reports.create(reportDetails);
    if (reports) {
      return res.status(200).json({ response: `${reports} Thanks for giving, your report has been saved` });
    }
  } catch (error) {
    return res.status(500).json({ response: `oopss, Error: ${error} occured` });
  }
});

router.get("/reports", authChecker, async (req, res) => {
  let { lat, lng } = req.query;
  lat = Number(lat);
  lng = Number(lng);
  await Reports.find({ "location.lat": { $gte: lat - 1, $lte: lat + 1 }, "location.lng": { $gte: lng - 1, $lte: lng + 1 } })
    // await Reports.find({ "location.lat": { lat }, "location.lng": { lng } })
    .select("_id type description location date")
    .exec()
    .then((allReports) => {
      if (!allReports || allReports < 1) {
        return res.status(404).json({ response: "Unfortunately, we dont have any reports for you, please check back", location: { lat, lng } });
      }
      // const arr = allReports.filter(r => Object.keys(r.location).indexOf('lat') >= 0);
      // console.log(arr, arr.map(s => (typeof s.location.lat)));
      res.status(200).json({ response: allReports.reverse(), location: { lat, lng } });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
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
