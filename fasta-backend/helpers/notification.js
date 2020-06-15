/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-undefined */
const cron = require("node-cron");

const ScheduleTrip = require("../models/trip");
const Reports = require("../models/report");
const mailer = require("./mailer");
const User = require("../models/index");

const notification = async () => {
  const reports = await Reports.find()
    .select("description location date")
    .exec();

  const schedules = await ScheduleTrip.find()
    .select("destination tripTime userId")
    .exec();

  reports.forEach((r) => {
    schedules.forEach((s) => {
      if (r.location === s.destination && r.date < s.tripTime) {
        const ids = User.findById(s.userId)
          .select("email fullname")
          .exec();
        ids
          .then((id) => {
            const options = {
              receiver: id.email,
              subject: "This is happening in your desiation!",
              text: `Hello ${id.fullname}`,
              output: `${r.description}\n\n`
            };
            mailer(options);
          })
          .catch(() => {
            // console.log(e);
          });
      }
    });
  });
};

const pushNotification = () => {
  cron.schedule("* 08 * * *", () => {
    notification();
  });
};

module.exports = pushNotification;
