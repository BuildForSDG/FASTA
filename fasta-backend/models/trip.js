const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  mode: { type: String },
  origin: { type: String },
  originLocation: { type: String },
  originLatLng: { type: Object },
  destination: { type: String },
  destinationLocation: { type: String },
  destinationLatLng: { type: Object },
  tripDistance: { type: String },
  tripDuration: { type: String },
  tripTime: { type: String },
  userId: { type: String },
  isVulnerable: { type: String },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("trips", tripSchema);
