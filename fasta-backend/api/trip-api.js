/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const { Client, Status } = require("@googlemaps/google-maps-services-js");

// instantiate the google http client
const client = new Client({});

// Allow function to receive coordinate argument from client
function GetTripInfo(latitude, longitude) {
  this.latitude = latitude;
  this.longitude = longitude;
}

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

// api to list all the transporters within 1km of users location
GetTripInfo.prototype.getPlaces = async () => {
  client.textSearch({
    params: {
      locations: [{ lat: this.latitude, lng: this.longitude }],
      query: "transport",
      key: process.env.TEST_KEY,
      radius: 10000
    }
  })
    .then((r) => {
      if (r.data.status === Status.OK) {
        return r.data.results;
      }
      return r.data.error_message;
    })
    .catch((e) => {
      console.log(e);
    });
};

// api to computer the direction of the trip and return directional information
GetTripInfo.prototype.getDirections = async () => {
  client.directions({
    params: {
      locations: [{ lat: this.latitude, lng: this.longitude }],
      query: "transport",
      radius: 10000
    },
    timeout: 1000 // milliseconds
  })
    .then((r) => {
      if (r.data.status === Status.OK) {
        console.log(r.data.results[0].elevation);
      } else {
        console.log(r.data.error_message);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};


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


module.exports = GetTripInfo;
