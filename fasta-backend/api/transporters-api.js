<<<<<<< HEAD
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const https = require("https");
// Option parameter for google api request
const options = {
  hostname: "maps.googleapis.com",
  port: 443,
  path: `/maps/api/place/textsearch/json?query=transport&location=${this.latitude},${this.longitude}&radius=10000&key=AIzaSyDg-6GC6doxzpE_etI9E-yJR2NOLyFzBYc`,
  method: "GET"
};

// Allow function to receive coordinate argument from client
function GetTransporter(latitude, longitude) {
  this.latitude = latitude;
  this.longitude = longitude;
}

// Get nearby transport 1km away
GetTransporter.prototype.getPlaces = async () => {
  const req = await https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });
  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
};


module.exports = GetTransporter;
=======
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

module.exports = GetTripInfo;
>>>>>>> f3aea88f4e4b00b5d17c3b21355bd8af25e3577d
