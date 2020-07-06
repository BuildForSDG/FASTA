/* eslint-disable no-useless-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require("express");
const axios = require("axios");
const { PolyUtil } = require("node-geometry-library");
const ScheduleTrip = require("../models/trip");
const Reports = require("../models/report");

const router = express.Router();


router.get("/trip-info/:tripId", async (req, res) => {
  // get all the report locations
  const reports = [];
  const reportsInLocation = [];
  let reportIndex;
  let isPathIndex;
  let tripDirectionReport;
  let inPath;
  let locationReport;

  // get direction from origin to destination
  // try to get all the report location coordinates to check if it falls on the trip path
  await Reports.find()
    .select("-_id location")
    .exec()
    .then((allReports) => {
      if (!allReports || allReports < 1) {
        return res.status(404).json({ response: "Reports not available at the moment, we're still checking" });
      }

      console.log("reports: ", allReports); 
      const reportArray = Object.keys(allReports);
      reportArray.forEach((key) => {
        const reportLocation = allReports[key];
        reports.push(reportLocation.location);
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });


  // get direction from origin to destination
  const getDirection = async (request, cb) => {
    await axios
      .get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${request.originLatLng}&destination=${request.destinationLatLng}&key=${process.env.TEST_KEY}`
      )
      .then((response) => {
        try {
          if (response.data.length <= 0) {
            return res.json({ error: response.data.error_message });
          }
          console.log(response.data.routes[0].legs[0].steps);
          cb(response.data.routes[0].overview_polyline.points);
        } catch (err) {
          console.error(err);
        } 
      })
      .catch((error) => {
        // throw new Error("Error fetching data");
        return res.json({response: "Error fetching data"});
      });
  };
  // get schedule trip Id
  await ScheduleTrip.findById({ _id: req.params.tripId })
    .select("-_id mode originLatLng destinationLatLng")
    .exec()
    .then((trip) => {
      if (!trip || trip < 1) {
        // throw new Error("unfortunetly, we dont have any report location schedule for you, check back");
        return res.json({response: "Trip not found!"});
      }
      console.log(trip);
      try {
        // console.log(reports);
        for (let i = 0; i < reports.length; i++) {
          reportIndex = i;
        }
        const triped = JSON.parse(JSON.stringify(trip));
        getDirection(triped, async (response) => {
          if (!response || response < 1) {
            return res.status(400).json({ response: "empty response" });
          }
          const path = PolyUtil.decode(response);
          return reports.map((report, index) => {
            if (report !== undefined && report !== "unknown location") {
              const reportFound = PolyUtil.isLocationOnEdge(report, path, 0.15);
              // isPathIndex = reportsInLocation.push(reportFound);
              if (reportFound) {
                // console.log(report);
                return Reports.find({ location: report })
                  .select("-_id type description date")
                  .exec()
                  .then((incidence) => {
                    if (!incidence || incidence < 0) {
                      res.status(404).send("Error, empty response");
                      return;
                    }
                    return incidence;
                  })
                  .then((rep) => res.status(200).json({ response: rep }))
                  .catch((err) => res.status(500).send(err));
              }
            }
          });
        });
      } catch (err) {
        console.log(err);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
