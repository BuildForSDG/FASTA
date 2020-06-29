
/* eslint-disable no-unused-vars */


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

  // NOTE!!!
  //  this is for any developer in the future, info is the second parameter of the callback
  //  after error, i had to remove it since i wasnt using it currently to fix some codacy issue
  await fastaMailer.sendMail(mailOptions, (error) => {
    // console.log(mailOptions, info);
    if (error) {
      throw error;
      // console.log(error);
    }
    return "Mail sent";
  });
};

module.exports = mailer;
