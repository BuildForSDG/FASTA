const express = require("express");

const router = express.Router();
const webpush = require("web-push");

const vpidkeys = webpush.generateVAPIDKeys();
// console.log(vpidkeys.privateKey);


// eslint-disable-next-line max-len
// webpush.setVapidDetails("mailto:thevetdoctor@gmail.com", process.env.VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY);
webpush.setVapidDetails("mailto:thevetdoctor@gmail.com", vpidkeys.publicKey, vpidkeys.privateKey);


router.get("/", (req, res) => res.status(200).json({ message: "Welcome to FASTA, taking you faster in safety & convenience!" }));

router.post("/subscribe", (req, res) => {
  const subscription = req.body;

  const payload = JSON.stringify({ title: "Push test" });
  webpush.sendNotification(subscription, payload).catch((err) => console.log(err));
  res.status(201).json({ message: "Push sent" });
});

module.exports = router;
