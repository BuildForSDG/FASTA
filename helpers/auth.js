const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = (password) => {
  if (!password) {
    throw new Error("error getting password");
  }

  const salt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(password, salt);
};

const comparePassword = (providedPassword, hash) => bcrypt.compareSync(providedPassword, hash);

const generateToken = (user) => jwt.sign({
  userDetails: {
    // eslint-disable-next-line no-underscore-dangle
    userId: user._id,
    email: user.email,
    fullName: user.fullname,
    phoneNumber: user.phoneNumber
  }
}, "JWT_SECRET", {
  algorithm: "HS384",
  expiresIn: "2h"
});

module.exports = { hashPassword, comparePassword, generateToken };
