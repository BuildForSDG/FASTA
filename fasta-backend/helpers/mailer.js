// const express = require("");

const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const mailer = async (options) => {
//   console.log(options);
  const fastaMailer = await nodemailer.createTransport(smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "fastamovements@gmail.com", // gmail created just for testing purposes
      pass: "Fasta1234" // for testing purposes
    }
  }));

  const mailOptions = {
    from: "<fastamovements@gmail.com>",
    to: options.receiver,
    subject: options.subject,
    text: options.text,
    html: options.output
  };
  // console.log(mailOptions);
  await fastaMailer.sendMail(mailOptions, (error, info) => {
    // console.log(mailOptions, info);
    if (error) {
      // throw error;
      // console.log(error);
    }
    return `Message sent: %s ${info}`;
  });
};

module.exports = mailer;
