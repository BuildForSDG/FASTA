const jwt = require("jsonwebtoken");
const User = require("../models/index");

module.exports = async (req, res, next) => {
  const tokenString = req.headers.authorization;
  if (!tokenString || !tokenString.startsWith("Bearer ")) {
    return res.status(403).end();
  }
  const tokenArray = tokenString.split(" ");
  if (!tokenArray || tokenArray.length !== 2) {
    return res.status(403).end();
  }

  const token = tokenArray[1];
  try {
    const decode = jwt.verify(token, "JWT_SECRET");
    const response = await User.findById(decode.userDetails.userId);

    if (!response) {
      return res.status(403).json({ response: "Authorization denied" });
    }

    req.user = response;
    next();
  } catch (error) {
    return res.status(403).json({ response: error.message });
  }
};
