/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const { Client, Status } = require("@googlemaps/google-maps-services-js");

// instantiate the google http client
const client = new Client({});

// Allow function to receive coordinate argument from client
class GetTripInfo {
  constructor(latitude, longitude, method) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.method = method;
  }

  // api to list all the transporters within 1km of users location
  async getPlaces() {
    let aa = {};
    try {
      const r = await client.textSearch({
        params: {
          locations: [{ lat: this.latitude, lng: this.longitude }],
          query: this.method,
          key: process.env.TEST_KEY,
          radius: 10000
        }
      });
      if (r.data.status === Status.OK) {
        aa = r.data.results;
      } else {
        aa = r.data.error_message;
      }
    } catch (e) {
      // console.log(e);
    }

    return aa;
  }
}

module.exports = GetTripInfo;
