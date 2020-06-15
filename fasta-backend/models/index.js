const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  vehiclemake: {
    type: String,
    default: null
  },
  vehiclemodel: {
    type: String,
    default: null
  },
  licencenumber: {
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  status: {
    type: String,
    default: null
  },
  registeredDate: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  }
});

module.exports = mongoose.model("User", userSchema);
