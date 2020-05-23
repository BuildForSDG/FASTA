/* eslint-disable default-case */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require("express");
const Transporters = require("../api/transporters-api");

const router = express.Router();

// api to get nearby transporters base on users location
router.post("/location-transporter", (req, res) => {
  const transporter = new Transporters(req.body.latitude, req.body.longitude);
  const locationTrnasporter = transporter.getPlaces();

  res.send(locationTrnasporter);
});

module.exports = router;
