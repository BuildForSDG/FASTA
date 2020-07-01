/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const https = require("https");

// Option parameter for google api request
const options = {
  hostname: "maps.googleapis.com",
  port: 443,
  path: `/maps/api/place/textsearch/json?query=transport&location=${this.latitude},${this.longitude}&radius=10000&key=AIzaSyC8G-WQhDTvlVflIFPzOj30rDQGk0Fekx8`,
  method: "GET"
};

// Allow function to receive coordinate argument from client
function GetTransporter(latitude, longitude) {
  this.latitude = latitude;
  this.longitude = longitude;
}

// COmpute polygon
GetTransporter.prototype.computePolygon = () => {
// empty function
// const google = new google.maps
};

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
