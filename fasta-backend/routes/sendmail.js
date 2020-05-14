/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable prefer-const */

const express = require("express");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const router = express.Router();

router.post("/send", async (req, res) => {
  // what will be sent to the registrants after registering
  const output = `<div style='margin: 0 auto; background: #ededed; border-top:2px solid green; border-bottom:2px solid green; box-shadow: 1px 2px 3px 4px #ccc; padding: 1.5rem; width: 50%; padding: 20px; height: auto'>
          <h1>Hey! ${req.body.fullname} Welcome to Fasta</h1>
          <hr>
          <div style='padding:1.5rem; margin:15px'>
          <p>FASTA helps you plan your Trip and allow you to go faster, click this <a href='#'>Link</a> to confirm your registration</div>
          </div>
          <br>
          <br>
          <h4>Welcome on board</h4>
          </div>
          `;
  // Nodemailer setup
  let fastaMailer = await nodemailer.createTransport(smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "fastamovement@gmail.com", // gmail created just for testing purposes
      pass: "Fasta123" // for testing purposes
    }
  }));

  let mailOptions = {
    from: "'Welcome to FASTA' <fastamovement@gmail.com>",
    to: `${req.body.email}`,
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
  });
});

module.exports = router;
