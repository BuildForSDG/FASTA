/* eslint-disable no-useless-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require("express");
const axios = require("axios");
const router = express.Router();
const { PolyUtil } = require("node-geometry-library");
const ScheduleTrip = require("../models/trip");
const Reports = require("../models/report");


const directionUrl = "https://maps.googleapis.com/maps/api/directions/json?";


router.get("/trip-info/:tripId?", async (req, res) => {

  console.log("params: ", req.params);
  console.log("query: ", req.query);
  let { t } = req.query;
  console.log("t: ", Number(t));
  const tolerance = Number(t) || PolyUtil.DEFAULT_TOLERANCE;
  let reportsOnRoute;

    // identify trip by ID from database
  const tripz = await ScheduleTrip.findById({ _id: req.params.tripId })
                                  .select("-_id mode originLatLng destinationLatLng")
                                  .exec()
                                  .then((trip) => {
                                    if (!trip || trip < 1) {
                                      return res.json({response: "Trip not found!"});
                                    }
                                    console.log("trip: ", trip);
                                    return trip; 
                                  })
                                  .catch((error) => {
                                    return res.status(500).json({ error });
                                  });
  
    // pull reports from database
  const reportz = await Reports.find()
                                .select("-_id")
                                .exec()
                                .then((allReports) => {
                                  if (!allReports || allReports < 1) {
                                    return res.status(404).json({ response: "Reports not available at the moment, we're still checking" });
                                  }
                                  // console.log("allReports: ", allReports);
                                  return allReports;
                                })
                                .catch((error) => {
                                  return res.status(500).json({ error });
                                });
                            
  // get list of points between from origin to destination
  const getDirection = async (request) => {
                        const origin = `${request.originLatLng.lat},${request.originLatLng.lng}`;
                        const destination = `${request.destinationLatLng.lat},${request.destinationLatLng.lng}`;
                        // console.log(origin, destination);
                        return await axios
                          .get(
                            `${directionUrl}origin=${origin}&destination=${destination}&key=${process.env.TEST_KEY}`
                          )
                          .then((response) => {
                            try {
                              if (response.data.length <= 0) {
                                return res.json({ error: response.data.error_message });
                              }
                              // console.log("steps: ", response.data.routes[0].legs[0].steps);
                              // console.log("points: ", response.data.routes[0].overview_polyline.points);
                              return response.data.routes[0].overview_polyline.points;
                            } catch (err) {
                              console.error(err);
                            } 
                          })
                          .catch((error) => {
                            // throw new Error("Error fetching data");
                            return res.json({response: "Error fetching data"});
                          });
                        };

      try {
        const triped = JSON.parse(JSON.stringify(tripz));
        const response = await getDirection(triped);
        const path = PolyUtil.decode(response);
        console.log("PolyUtil decoded points: ", path.length);
           
        const reportsOnPath = reportz.filter((report) => {
          if (report.location !== undefined && report.location !== "unknown location") {
            const reportFound = PolyUtil.isLocationOnEdge(report.location, path, tolerance);
            if (reportFound) {
              // console.log("PolyUtil tolerance", tolerance);
              console.log(report.location,"is on path");
              return report;
            }
          }
        }); 
        reportsOnRoute = reportsOnPath; 

      } catch (err) {
        console.log(err);
      }
      // console.log(reportsOnRoute);

    return res.json({response: reportsOnRoute});
});

module.exports = router;