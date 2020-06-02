/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const { Client, Status, latLngToString } = require("@googlemaps/google-maps-services-js");
const axios = require("axios");

const defaultConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

// It may be necessary to use a custom axios instance to bypass this for the time being.
const axiosInstance = axios.create(defaultConfig);

// instantiate the google http client
const client = new Client({ axiosInstance });

// distance and directions metric
function TripMetrix(origin, destination) {
  this.origin = origin;
  this.destination = destination;
  console.log(origin);
}


// api to get the distance of the trip from the origin to the destination
TripMetrix.prototype.getTripDistance = async () => {
//   const latLngOrigin = latLngToString(this.origin);
//   const latLngDestination = latLngToString(this.destination);

  client.directions({
    params: {
      origin: { lat: this.origin.lat, lng: this.origin.lng },
      destination: { lat: this.destination.lat, lng: this.destination.lng },
      key: process.env.TEST_KEY,
      mode: "driving",
      traffic_model: "best_guess",
      departure_time: 1589673600
    }
  })
    .then((r) => {
      if (r.data.status === Status.OK) {
        console.log(r.data);
      } else {
        console.log(r.data.error_message);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = TripMetrix;
