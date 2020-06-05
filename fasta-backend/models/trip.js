const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  mode: { type: String },
  origin: { type: Object },
  destination: { type: Object },
  tripDistance: { type: String },
  tripTime: {
    type: Date,
    default: Date.now
  },
  isVulnerable: { type: Boolean },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("trips", tripSchema);
