const mongoose = require("mongoose");

const { Schema } = mongoose;

const reportSchema = new Schema({
  tripId: { type: Schema.Types.ObjectId, ref: "trips" },
  type: { type: String },
  description: { type: String },
  location: { type: Object },
  address: { type: String },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("report", reportSchema);
