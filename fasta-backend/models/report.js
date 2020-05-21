const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  type: { type: String },
  heading: { type: String },
  description: { type: String },
  location: { type: Object },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("report", reportSchema);
