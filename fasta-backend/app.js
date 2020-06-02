<<<<<<< HEAD
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

const userRouter = require("./routes/users");
const indexRouter = require("./routes/index");
const sendRouter = require("./routes/sendmail");
const getTransporter = require("./routes/location-transporter");
const reportRouter = require("./routes/report");


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

app.use("/api/v1/users", userRouter);
app.use("/api/v1/", indexRouter);
app.use("/api/v1/", sendRouter);
app.use("/api/v1/", getTransporter);
app.use("/api/v1", reportRouter);

module.exports = app;
=======
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const userRouter = require("./routes/users");
const indexRouter = require("./routes/index");
const sendRouter = require("./routes/sendmail");
const getTransporter = require("./routes/location-transporter");

require("./db/index");
// const userRouter = require("./routes/index");

const app = express();
// app.use(userRouter);
// indexRouter(app);
// app.use(indexRouter);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/", indexRouter);
app.use("/api/v1/", sendRouter);
app.use("/api/v1/", getTransporter);

module.exports = app;
>>>>>>> f3aea88f4e4b00b5d17c3b21355bd8af25e3577d
