const router = require("express").Router();

const ScheduleTrip = require("../models/trip");
const Reports = require("../models/report");
const User = require("../models/index");

router.get("/notification", async (req, res) => {
  const reports = await Reports.find()
    .select("description location date")
    .exec();

  const schedules = await ScheduleTrip.find()
    .select("destination tripTime userId")
    .exec();

  reports.forEach((r) => {
    schedules.forEach((s) => {
      // if (r.location === s.destination && r.date < s.tripTime) {
      if (r.location === s.destination) {
        User.findById(s.userId)
          .then((id) => {
            const options = {
              subject: "This is happening in your desiation!",
              text: `Hello ${id.fullname}`,
              output: `${r.description}`
            };

            return res.send({ options });
          })
          .catch(() => {
            // console.log(e);
          });
      }
    });
  });
});


module.exports = router;
