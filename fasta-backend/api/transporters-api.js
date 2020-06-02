/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const { Client, Status } = require('@googlemaps/google-maps-services-js');

// instantiate the google http client
const client = new Client({});

// Allow function to receive coordinate argument from client
function GetTripInfo(latitude, longitude) {
  this.latitude = latitude;
  this.longitude = longitude;
}

// api to list all the transporters within 1km of users location
GetTripInfo.prototype.getPlaces = async () => {
  client
    .textSearch({
      params: {
        locations: [{ lat: this.latitude, lng: this.longitude }],
        query: 'transport',
        key: process.env.TEST_KEY,
        radius: 10000
      }
    })
    .then(r => {
      if (r.data.status === Status.OK) {
        // console.log(r.data.results);
        return r.data.results;
      }
      return r.data.error_message;
    })
    .catch(e => {
      console.log(e);
    });
};

module.exports = GetTripInfo;
