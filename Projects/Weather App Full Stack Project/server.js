const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const apiRoutes = require("./routes/api");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
mongoose.connect("mongodb://localhost:27017/weathers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(apiRoutes);
app.listen(3000, function () {
  console.log("Server up and running on port 3000");
});
