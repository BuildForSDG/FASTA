/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require("express");
const { SphericalUtil, PolyUtil } = require("node-geometry-library");
const ScheduleTrip = require("../models/trip");
const Reports = require("../models/report");

const router = express.Router();

router.get("/start-trip/:tripId", async (req, res) => {
  let scheduleOrigin;
  let scheduleDestination;
  let scheduleTripHeading;
  const tripProperties = [];
  let tripDistance;

  // get schedule trip Id
  await ScheduleTrip.findById({ _id: req.params.tripId })
    .select("-_id origin destination")
    .exec()
    .then((trip) => {
      if (!trip || trip < 1) {
        return res.status(404).json({ response: "unfortunetly, we dont have any report location schedule for you, check back" });
      }
      //   scheduleOrigin = trip.origin;
      //   scheduleDestination = trip.destination;
      scheduleOrigin = { lat: 25.775, lng: -80.19 };
      scheduleDestination = { lat: 21.774, lng: -80.19 };
    })
    .catch((error) => {
      res.status(500).json({ error });
    });

  try {
    // getting the angle in degrees on which direction the user is taking
    scheduleTripHeading = await SphericalUtil.computeHeading({ lat: 25.775, lng: -80.19 }, { lat: 21.774, lng: -80.19 });

    // compute the distance in meters of the trip direction
    tripDistance = await SphericalUtil.computeDistanceBetween({ lat: 25.775, lng: -80.19 }, { lat: 21.774, lng: -80.19 });

    // the coordinates gotten is used to check or get any origin location info for user
    scheduleOrigin = SphericalUtil.computeOffsetOrigin({ lat: 21.774, lng: -80.19 }, tripDistance, scheduleTripHeading);

    // the coordinates gotten is used to check or get any destination location info for user
    // scheduleDestination = SphericalUtil.computeOffset(scheduleOrigin, tripDistance, scheduleTripHeading);

    // use interpolated location to get incidence info
    // const interpolatedLocation = SphericalUtil.interpolate(scheduleOrigin, scheduleDestination, 0);

    // tripProperties.push([scheduleTripHeading, tripDistance, scheduleOrigin, scheduleDestination]);

    res.json({ response: scheduleOrigin });

    // console.log(scheduleTripHeading);
  } catch (err) {
    console.log(err);
  }

  console.log(scheduleOrigin);
});


module.exports = router;
