/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-undefined */
// const cron = require('cron');

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
        // console.log(`${s.userId}`);

        const ids = User.findById(s.userId).select("email fullname").exec();

        ids.then((id) => {
          const options = {
            receiver: id.email,
            subject: "This is happening in your desiation!",
            text: `Hello ${id.fullname}`,
            output: `${r.description}\n\n`
          };
          const as = mailer(options);
          as.then((a) => {
            console.log(a);
          });


          // const push = new cron.CronJob('00 00 08 * * *', () => {
          //   mailer(options);
          // });

        //   push.start();
        }).catch((e) => {
          console.log(e);
        });
      }
    });
  });
};


module.exports = notification;
