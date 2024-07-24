const express = require("express");
const logger = require("morgan");
const path = require("path");
const multer = require("multer");

const app = express();
const port = 3000;
const _path = path.join(__dirname, "/");

app.use(logger("tiny"));
app.use("/", express.static(_path));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
