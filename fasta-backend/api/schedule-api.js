/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
const { Client, Status } = require("@googlemaps/google-maps-services-js");

// instantiate the google http client
const client = new Client({});

// distance and directions metric
function TripMetrix(origin, destination) {
  origin = {
    lat,
    lng
  };

  destination = {
    lat,
    lng
  };

  this.origin = origin;
  this.destination = destination;
}


// api to get the distance of the trip from the origin to the destination
TripMetrix.prototype.getTripDistance = async (selectedMode) => {
  client.distancematrix({
    params: {
      origin: [{ origin: this.origin }],
      destination: [{ destination: this.destination }],
      mode: selectedMode
    }
  })
    .then((r) => {
      if (r.data.status === Status.OK) {
        console.log(r.data.results);
      } else {
        console.log(r.data.error_message);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = TripMetrix;
