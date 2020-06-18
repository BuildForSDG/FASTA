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
  const tripDirection = [];
  let inPath;
  let locationReport;

  // get direction from origin to destination
  const getDirection = async (request, cb) => {
    // const { mode, origin, destinationLatLng } = request;
    // console.log(`mode:${request}`);
    console.log(request);
    await axios
      .get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${request.origin}&destination=${request.destination}&key=${process.env.TEST_KEY}`
      )
      .then((response) => {
        console.log(response.data); 
        if (response.data.length <= 0) {
          return res.json({ error: response.data.error_message });
        }
        console.log(response.data);
        cb(response.data);
      })
      .catch((error) => {
        throw new Error("Error fetching data");
      });
  };

  // try to get all the report location coordinates to check if it falls on the trip path
  await Reports.find()
    .select("-_id location")
    .exec()
    .then((allReports) => {
      if (!allReports || allReports < 1) {
        return res.status(404).json({ response: "unfortunetly, we dont have any report in your location , check back" });
      }

      const reportArray = Object.keys(allReports);
      reportArray.forEach((key) => {
        const reportLocation = allReports[key];
        reports.push(reportLocation.location);
      });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });

  // get schedule trip Id

  await ScheduleTrip.findById({ _id: req.params.tripId })
    // .select("-_id mode originLatLng destinationLatLng isVulnerable")
    .select()
    .exec()
    .then((trip) => {
      // console.log(trip);
      if (!trip || trip < 1) {
        return res.status(404).json({ response: "unfortunately, we dont have any report location schedule for you, check back" });
      } 
 
      console.log(trip, trip.originLatLng);
      const newTrip = trip;
      // const getTrips = {
      //   origin: { lat: 5.675, lng: 7.096 },
      //   destination: { lat: 6.074, lng: 8.435 },
      //   mode: "driving"
      // };

      const { mode, originLatLng, destinationLatLng, userId } = trip;
      const getTrips = {
        origin: originLatLng,
        destination: destinationLatLng,
        userId,
        mode
      }; 
        console.log(getTrips);
      getDirection(getTrips, (response) => {
        // console.log(getTrips);
        if (!response || response < 1) {
          return res.status(404).json({ response: "empty response" });
        }
        console.log(response);
        tripDirection.push(response);

        const reportInTrip = tripDirection.map((report) => {
          locationReport = PolyUtil.isLocationOnEdge(report, tripDirection);
          return locationReport ? reportsInLocation.push(reports) : [];
        });
        reportInTrip.map((location) => {
          if (!location) {
            Reports.find({ location })
              .select("-_id type description date")
              .exec()
              .then((incidence) => {
                if (!incidence || incidence < 0) {
                  return res.status(404).json({ response: "empty response" });
                }
                // return res.status(200).json({ response: incidence });
                console.log(incidence);
              });
          }
          return null;
        });
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ error });
    });


  // try {
  //   for (let i = 0; i < reportsInLocation.length; i++) {
  //     inPath = reportsInLocation[i];
  //     Reports.find({ location: inPath })
  //       .select("-_id type description date")
  //       .exec()
  //       .then((incidence) => {
  //         if (!incidence || incidence < 0) {
  //           return res.status(404).json({ response: "empty response" });
  //         }
  //         return res.status(200).json({ response: incidence });
  //       });
  //   }
  // } catch (e) {
  //   console.log(e);
  // }
});

module.exports = router;
