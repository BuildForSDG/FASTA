/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require("express");
const axios = require("axios");
const { SphericalUtil, PolyUtil } = require("node-geometry-library");
const ScheduleTrip = require("../models/trip");

const router = express.Router();

router.get("/start-trip/:tripId", async (req, res) => {
  let scheduleArrivalTime;
  let scheduleMode;
  let scheduleOrigin;
  let scheduleDestination;
  let scheduleTripHeading;
  const tripProperties = [];
  let tripDistance;

  // get schedule trip Id
  await ScheduleTrip.findById({ _id: req.params.tripId })
    .select("-_id mode origin destination tripTime")
    .exec()
    .then((trip) => {
      if (!trip || trip < 1) {
        return res.status(404).json({ response: "unfortunetly, we dont have any report location schedule for you, check back" });
      }
      //   scheduleOrigin = trip.originLatLng;
      //   scheduleDestination = trip.destinationLatLng;
      scheduleMode = trip.mode;
      scheduleArrivalTime = trip.tripTime;
      scheduleOrigin = { lat: 5.775, lng: 7.19 };
      scheduleDestination = { lat: 6.774, lng: 8.19 };
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  try {
    await axios
      .get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${scheduleOrigin}&destination=${scheduleDestination}&mode=${scheduleMode}&arrival_time=${scheduleArrivalTime}&key=${process.env.TEST_KEY}`
      )
      .then((response) => {
        // if (response.data.rows.length <= 0) {
        //   return res.json({ error: response.data.error_message });
        // }
        // const result = response.data.rows[0].elements[0];
        // const { distance, duration } = result;
        // return res.json({ data: { distance: distance.text, duration: duration.text } });

        console.log(response.data);
      })
      .catch((error) => {
        throw new Error("Error fetching data");
      });
  } catch (error) {
    throw new Error("Internal Server Error");
  }

  // try {
  //   // getting the angle in degrees on which direction the user is taking
  //   scheduleTripHeading = await SphericalUtil.computeHeading({ lat: 25.775, lng: -80.19 }, { lat: 21.774, lng: -80.19 });

  //   // compute the distance in meters of the trip direction
  //   tripDistance = await SphericalUtil.computeDistanceBetween({ lat: 25.775, lng: -80.19 }, { lat: 21.774, lng: -80.19 });

  //   // the coordinates gotten is used to check or get any origin location info for user
  //   scheduleOrigin = SphericalUtil.computeOffsetOrigin({ lat: 21.774, lng: -80.19 }, tripDistance, scheduleTripHeading);

  //   // the coordinates gotten is used to check or get any destination location info for user
  //   // scheduleDestination = SphericalUtil.computeOffset(scheduleOrigin, tripDistance, scheduleTripHeading);

  //   // use interpolated location to get incidence info
  //   // const interpolatedLocation = SphericalUtil.interpolate(scheduleOrigin, scheduleDestination, 0);

  //   // tripProperties.push([scheduleTripHeading, tripDistance, scheduleOrigin, scheduleDestination]);

  //   res.json({ response: scheduleOrigin });

  //   // console.log(scheduleTripHeading);
  // } catch (err) {
  //   console.log(err);
  // }

  // console.log(scheduleOrigin);
});


module.exports = router;
