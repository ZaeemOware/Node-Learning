const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();
require("./models");

const app = express();

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
