const express = require("express");

console.log("Hi Iam ");
const app = express();
app.get("/", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.");
});
app.get("/", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.");
  response.send("Ending the cycle, thanks for visiting");
});
app.get("/", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.");
  response.send("Ending the cycle, thanks for visiting");
});

app.get("/maps", function (request, response) {
  response.send("Here's some stuff related to maps");
});

app.get("/shoobi", function (request, response) {
  response.send("This here is the shoobi *route*");
});
