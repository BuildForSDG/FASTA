const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const userRouter = require("./routes/users");
const indexRouter = require("./routes/index");
const sendRouter = require("./routes/sendmail");
require("./db/index");
// const userRouter = require("./routes/index");


const app = express();
// app.use(userRouter);
// indexRouter(app);
// app.use(indexRouter);


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/v1/users", userRouter);
app.use("/api/v1/", indexRouter);
app.use("/api/v1/", sendRouter);


module.exports = app;
