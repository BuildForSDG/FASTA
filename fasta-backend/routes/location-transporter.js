/* eslint-disable default-case */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require("express");
const { Client, Status } = require("@googlemaps/google-maps-services-js");
const TripMetrix = require("../api/schedule-api");
const TripInfo = require("../api/transporters-api");


const router = express.Router();

// api to get nearby transporters base on users location
router.post("/location-transporter", (req, res) => {
  const trip = new TripInfo(req.body.latitude, req.body.longitude);
  const locationTrnasporter = trip.getPlaces();

  res.send(`Returned transporters: ${locationTrnasporter}`);
});

// api that gives the computed value for distance between in meters
router.post("/trip-distance", (req, res) => {
  console.log(req.body);

  const origin = {
    lat: req.body.latitude,
    lng: req.body.longitude
  };

  const destination = {
    lat: req.body.latitude,
    lng: req.body.longitude
  };
  // const origin = new TripInfo(req.body.latitude, req.body.longitude);
  // const destination = new TripInfo(req.body.latitude, req.body.longitude);
  console.log(destination);
  const trip = new TripMetrix(origin, destination);
  const tripdistance = trip.getTripDistance();

  res.json(tripdistance);
});

module.exports = router;
