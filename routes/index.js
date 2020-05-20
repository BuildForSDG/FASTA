
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.status(200).json({ message: "Welcome to FASTA, taking you faster in safety & convenience!" }));

module.exports = router;
