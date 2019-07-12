const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("./src/models/db");

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users-routes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src/public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
