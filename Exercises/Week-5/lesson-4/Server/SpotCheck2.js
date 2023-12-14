const express = require("express");

const app = express();
app.get("/life", function (request, response) {
  response.send("42");
});
const users = {
  tilda: "You've done a wonderful job",
  riva: "You need to improve your form, but good perseverance",
  jeremy: "You're incredible",
};
/* app.get("/users/:userID", function (request, response) {
  response.send(users[request.params.userID]);
});
 */
app.get("/routeWithOptionalParameters", (request, response) => {
  let params = request.query;
  response.send(params);
});
