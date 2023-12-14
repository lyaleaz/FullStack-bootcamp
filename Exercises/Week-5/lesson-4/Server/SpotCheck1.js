const express = require("express");

const app = express();
app.get("/life", function (request, response) {
  response.send("42");
});
app.get("/landing/:username", function (request, response) {
  response.send(`Hi there, ${request.params.username}`);
});
