const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const apiRoutes = require("./routes/api");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/weatherDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(apiRoutes);
app.listen(3000, function () {
  console.log("Server up and running on port 3000");
});
