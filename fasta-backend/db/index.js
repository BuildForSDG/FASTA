/* eslint-disable no-console */
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);

// const db_uri = "mongodb://localhost:27017/FASTA";
// eslint-disable-next-line camelcase
const db_uri = process.env.DB_URI;
// console.log(db_uri);
// console.log(db_uri);
console.log("Trying to connect to DB...");

mongoose.connect(db_uri)
  .then(() => console.log("FASTA DB connected!"))
  .catch((error) => console.error(error.message));

module.exports = mongoose;
