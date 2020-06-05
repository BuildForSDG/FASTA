// const express = require("");

const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const mailer = async (options) => {
//   console.log(options);
  const fastaMailer = await nodemailer.createTransport(smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "fastamovement@gmail.com", // gmail created just for testing purposes
      pass: "Fasta123" // for testing purposes
    }
  }));

  const mailOptions = {
    from: "<fastamovement@gmail.com>",
    to: options.receiver,
    subject: options.subject,
    text: options.text,
    html: options.output
  };
  // console.log(mailOptions);
  await fastaMailer.sendMail(mailOptions, (error, info) => {
    // console.log(mailOptions, info);
    if (error) {
      throw error;
    }
    return `Message sent: %s ${info.messageId}`;
  });
};

module.exports = mailer;
