/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require("express");
const { PolyUtil } = require("node-geometry-library");
const ScheduleTrip = require("../models/trip");
const Reports = require("../models/report");

const router = express.Router();

router.get("/trip-info/:tripId", async (req, res) => {
// get allthe report locations
  const reports = [];
  let trips;
  await Reports.find()
    .select("-_id location")
    .exec()
    .then((allReports) => {
      if (!allReports || allReports < 1) {
        return res.status(404).json({ response: "unfortunetly, we dont have any report location schedule for you, check back" });
      }

      const valuesArray = Object.keys(allReports);
      valuesArray.forEach((key) => {
        const value = allReports[parseInt(key)];
        reports.push(value.location);
      });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });

  // get schedule trip Id
  await ScheduleTrip.findById({ _id: req.params.tripId })
    .select("-_id origin destination")
    .exec()
    .then((trip) => {
      if (!trip || trip < 1) {
        return res.status(404).json({ response: "unfortunetly, we dont have any report location schedule for you, check back" });
      }
      trips = trip;
    })
    .catch((error) => {
      res.status(500).json({ error });
    });

  try {
    const response = await PolyUtil.containsLocation(trips, reports);
    if (response) {
      await Reports.find()
        .select()
        .exec()
        .then((allReports) => {
          if (!allReports || allReports < 1) {
            return res.status(404).json({ response: "unfortunetly, we dont have any report location schedule for you, check back" });
          }
          res.status(200).json({ response: allReports });
        })
        .catch((error) => {
          res.status(500).json({ error });
        });
    } else {
      res.send("Trip does match any incidence");
    }
  } catch (err) {
    // empty
  }
});

module.exports = router;
