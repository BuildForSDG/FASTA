/* eslint-disable consistent-return */
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

router.get("/reports", async (req, res) => {
  let { lat, lng } = req.query;
  lat = Number(lat);
  lng = Number(lng);
  await Reports.find({ "location.lat": { "$gte": lat - 1, "$lte": lat + 1 }, "location.lng": { "$gte": lng - 1, "$lte": lng + 1 } })
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
      res.status(500).json({ error });
    });
});
module.exports = router;
