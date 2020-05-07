/* eslint-disable no-console */
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);

mongoose.connect(process.env.DB_URI)
  .then(() => console.log("FASTA DB connected!"))
  .catch((error) => console.error(error.message));

module.exports = mongoose;
