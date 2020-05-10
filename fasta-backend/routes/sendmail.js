/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable prefer-const */
const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();


router.use("/send", (req, res, next) => {
  console.log("router middleware called");
  console.log(req.method, req.url);
  next();
});

router.post("/send", async (req, res) => {
  if (!req.body || req.body.length === 0) {
    console.log("request body not found");
    return res.sendStatus(400);
  }
  // what will be sent to the registrants after registering
  const output = `<div style='margin: 0 auto; background: #ededed; border-top:2px solid green; border-bottom:2px solid green; box-shadow: 1px 2px 3px 4px #ccc; padding: 20px; width:60%; height:60% '>
          <h1>Hey! ${req.body.fullname} Welcome to Fasta</h1>
          <hr>
          <p style='padding:1.5rem;'>FASTA helps you plan your Trip and allow you to go faster, click this <a href='#'>Link</a> to confirm your registration</p>
          <h4>Welcome on board</h4>
          </div>
          `;
  // Nodemailer setup
  let fastaMailer = await nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "fastamovement@gmail.com", // gmail created just for testing purposes
      pass: "Fasta123" // for testing purposes
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: "'Welcome to FASTA' <fastamovement@gmail.com>",
    to: "stanarua@aol.com", // "stanarua@aol.com",
    subject: "Your Registration was successful",
    text: "Hey there, it’s our first message from FASTA Team",
    html: output
  };
  await fastaMailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.send(`Email sent to ${req.body.email}`);
    console.log(`${req.body.email}`);
  });
});

module.exports = router;
