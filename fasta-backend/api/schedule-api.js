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
console.log(process.env.TEST_KEY);
// instantiate the google http client
const client = new Client({ axiosInstance });

// distance and directions metric
function TripMetrix(origin, destination) {
  this.origin = origin;
  this.destination = destination;
  console.log(origin, destination);
//   client.directions({
//     params: {
//       origin,
//       destination,
//       key: process.env.TEST_KEY,
//       mode: "driving",
//       traffic_model: "best_guess",
//       departure_time: 1589673600
//     }
//   })
//     .then((r) => {
//       if (r.data.status === Status.OK) {
//         console.log(r.data);
//       } else {
//         console.log(r.data.error_message);
//       }
//     })
//     .catch((e) => {
//       console.log(e);
//     });
}


TripMetrix.prototype.getTripDistance = async () => {
  console.log(this.origin, this.destination);
//   const latLngOrigin = latLngToString(this.origin);
//   const latLngDestination = latLngToString(this.destination);
  client.directions({
    params: {
      origin: this.origin,
      destination: this.destination,
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
