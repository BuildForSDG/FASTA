/* eslint-disable func-names */
const express = require("express");
const crypto = require("crypto");
const async = require("async");


const router = express.Router();
const User = require("../models/index.js");
const bcrypt = require("../helpers/auth");
const authChecker = require("../middlewares/authChecker");


//  CREATE A NEW USER AND ADD TO DATABASE
router.post("/", async (req, res) => {
  // console.log(req.body);
  // eslint-disable-next-line consistent-return
  await User.findOne({ email: req.body.email }).then((result) => {
    if (result) {
      return res.status(403).json({ response: "email exists" });
    }
  });
  try {
    const {
      fullname, email, phonenumber, password, confirmPassword
    } = req.body;
    if (password !== confirmPassword) {
      return res.status(403).json({ response: "confirmpassword and password doesn't match" });
    }
    const hash = await bcrypt.hashPassword(confirmPassword);
    await User.create({
      fullname, email, phonenumber, password: hash
    });
    return res.status(200).json({ response: "Signup succesfully" });
  } catch (error) {
    return res.status(500).json({ response: error.message });
  }
});

// USER LOGIN HERE
router.post("/login", async (req, res) => {
  const {
    email, password
  } = req.body;

  await User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user || user.length < 1) {
        return res.status(401).json({ response: "Auth failed" });
      }
      const passwordcheck = bcrypt.comparePassword(password, user.password);
      if (passwordcheck) {
        const token = bcrypt.generateToken(user);
        return res.status(200).json({
          response: "Login succesfull",
          token
        });
      }
      return res.status(401).json({ response: "Auth failed" });
    }).catch((error) => res.status(500).json({ response: error.message }));
});

//  GET ALL USERS FROM DATABASE
router.get("/", authChecker, (req, res) => {
  User.find().then(
    (allUsers) => {
      res.status(200).json(allUsers.reverse());
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error
      });
    }
  );
});

//  GET A SPECIFIC USER BY ID) FROM DATABASE
router.get("/:id", authChecker, (req, res) => {
  const { id } = req.params;

  User.findOne({
    _id: id
  }).then(
    (thisUser) => {
      //   console.log("Getting specific user by ID!");
      res.status(200).json(thisUser);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error
      });
    }
  );
});

router.post("/forget", (req, res, next) => {
  const { email } = req.body;
  // houses muliple functions
  async.waterfall([
    function (done) {
      crypto.randomBytes(20, (err, buf) => {
        // eslint-disable-next-line prefer-const
        let token = buf.toString("hex");
        done(err, token);
      });
    },

    function (token, done) {
      User.findOne({ email }, (err, user) => {
        if (!user) {
          console.log("email not found");
          return res.status(404).json({ response: `${email}, not found, please check the email again` });
        }
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save()
          .then((result) => {
            console.log(result.resetPasswordToken, result.resetPasswordExpires);
            done(err, token, user);
          });
        return res.status(200).json({ response: user });
      });
    },

    // TODO send the reset link to the user's mail
    function (token, user, done) {

    }
  ], (err) => {
    if (err) {
      return next(err);
    }
    return res.status(500).json({ response: `An error ${err} occured doing the process` });
  });
});


router.route("/reset/:token")
  .all()
  .get(async (req, res) => {
    await User.findOne({
      resetPasswordToken: req.params.token, resetPasswordExpires: { $gte: Date.now() }
    }).then((user) => {
      if (!user) {
        return res.status(200).json({ response: "Invalid user" });
      }
      return res.status(200).json({ response: { token: req.params.token } });
    });
  })
  .post(async (req, res) => {
    const { password, confirmPassword } = req.body;
    if (!password || !confirmPassword) {
      return res.status(403).json({ response: "Both fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(403).json({ response: "password and confirmpassword didn\t match" });
    }
    try {
      const hash = await bcrypt.hashPassword(password);
      const user = await User.findOneAndUpdate(
        { resetPasswordToken: req.params.token, resetPasswordExpires: { $gte: Date.now() } },
        { $set: { password: hash }, resetPasswordToken: undefined, resetPasswordExpires: undefined },
        { useFindAndModify: false }
      );
      if (!user) {
        return res.status(404).json({ response: "Invalid user" });
      }
      res.status(200).json({ response: "your password reset was succesful, login to continue" });
      // TODO SEND MAIL TO THE USER
    } catch (error) {
      return res.status(500).json({ response: `error ${error} occurred` });
    }
  });


module.exports = router;
