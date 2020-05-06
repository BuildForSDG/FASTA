/* eslint-disable no-console */
const express = require("express");
const parser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const server = express();
// const mongoose = require("./db/index.js");
const RouteHandler = require("./routes/index");

const port = process.env.PORT || 8080;

server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));

RouteHandler(server);
// console.log(">>>>", RouteHandler(server));


dotenv.config();

server.use(RouteHandler);
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);

// const dbUri = "mongodb://localhost:27017/FASTA";
const dbUri = process.env.DB_URI;
mongoose.connect(dbUri)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas for FASTA APP!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

server.get("/", (req, res) => {
  console.log("Connected");
  res.status(200).json({ message: "Success" });
});

server.listen(port, () => { console.log(`Backend server started @ ${port}!`); });

module.exports = server;
