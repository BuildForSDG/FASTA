const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");


dotenv.config();

const CORS = require("cors");
const userRouter = require("./routes/users");
const indexRouter = require("./routes/index");
const sendRouter = require("./routes/sendmail");
const getTransporter = require("./routes/location-transporter");
const reportRouter = require("./routes/report");

const tripInfoRouter = require("./routes/tripInfo");



require("./db/index");
// const userRouter = require("./routes/index");

const app = express();
// app.use(userRouter);
// indexRouter(app);
// app.use(indexRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(CORS());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/", indexRouter);
app.use("/api/v1/", sendRouter);
app.use("/api/v1/", getTransporter);
app.use("/api/v1", reportRouter);
app.use("/api/v1", tripInfoRouter);

app.get("/", (req, res) => res.send("<h2>Welcome to FASTA</h2><p><a href=\"/api/v1\">Check out version 1 of the FASTA API</a></p>"));

module.exports = app;
