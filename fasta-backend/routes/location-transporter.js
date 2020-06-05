/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const axios = require('axios');
const { Client, Status } = require('@googlemaps/google-maps-services-js');
const TripMetrix = require('../api/schedule-api');
const TripInfo = require('../api/transporters-api');

const router = express.Router();

// api to get nearby transporters base on users location
router.post('/location-transporter', (req, res) => {
  const trip = new TripInfo(req.body.latitude, req.body.longitude, req.body.method);
  const locationTrnasporter = trip.getPlaces();

  locationTrnasporter.then((data) => {
    res.send({ data });
  });
});

router.post('/trip-distance', async (req, res) => {
  const { origin, destination } = req.body;
  try {
    await axios
      .get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${
          process.env.TEST_KEY
        }`
      )
      .then(response => {
        if (response.data.rows.length <= 0) {
          return res.json({ error: response.data.error_message });
        }
        const result = response.data.rows[0].elements[0];
        const { distance, duration } = result;
        return res.json({ data: { distance: distance.text, duration: duration.text } });
        // return res.json({ data: { result } });
        // console.log(response);
      })
      .catch(error => {
        // throw new Error("Error fetching data");
        console.log(error);
      });
  } catch (error) {
    // throw new Error("Internal Server Error");
    console.log(error);
  }
});

// api that gives the computed value for distance between in miles
router.post('/trip-direction-info', async (req, res) => {
  const { origin, destination } = req.body;
  try {
    await axios
      .get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${
          process.env.TEST_KEY
        }`
      )
      .then(response => {
        // if (response.data.rows.length <= 0) {
        //   return res.json({ error: response.data.error_message });
        // }
        // const result = response.data.rows[0].elements[0];
        const rse = response.data;
        // const { distance, duration } = result;
        // return res.json({ data: { distance: distance.text, duration: duration.text } });
        return res.json({ data: { rse } });
        // console.log(response.data);
      })
      .catch(error => {
        // throw new Error("Error fetching data");
        console.log(error);
      });
  } catch (error) {
    // throw new Error("Internal Server Error");
    console.log(error);
  }
});

router.post('/schedule-a-trip', async (req, res) => {
  const { mode, origin, destination, isVulnerable, tripDistance, tripTime } = req.body;

  if (!mode || !origin || !destination || !isVulnerable || !tripDistance || !tripTime) {
    return res.status(403).json({ response: 'please all fields are required' });
  }

  try {
    const tripDetails = {
      mode,
      origin,
      destination,
      isVulnerable,
      tripDistance,
      tripTime
    };
    const trips = await ScheduleTrip.create(tripDetails);
    if (trips) {
      return res.status(200).json({ response: 'Your Trip Details are saved!' });
    }
  } catch (error) {
    return res.status(500).json({ response: `oopss, Error: ${error} occured` });
  }
});

// add the authChecker for authentication before, endpoint will list all the schecduled trip
router.get('/trips', async (req, res) => {
  await ScheduleTrip.find()
    .select('_id mode origin destination isVulnerable tripDistance tripTime date')
    .exec()
    .then(allTrips => {
      if (!allTrips || allTrips < 1) {
        return res.status(404).json({ response: 'unfortunetly, we dont have any trips schedule for you, check back' });
      }
      res.status(200).json({ response: allTrips.reverse() });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// add the authChecker for authentication before, endpoint will update trips scheduled by Id
router.put('/trips/:id', async (req, res) => {
  await ScheduleTrip.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) {
      return res.status(500).send({ error: 'Update by Id unsuccessful' });
    }
    res.send({ success: 'Update by Id success' });
  });
});

// add the authChecker for authentication before, endpoint will delete trips scheduled by Id
router.delete('/trips/:id', async (req, res) => {
  await ScheduleTrip.findOneAndDelete(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).send({ error: 'Delete unsuccessful' });
    }
    res.send({ success: 'Delete success' });
  });
});
module.exports = router;
