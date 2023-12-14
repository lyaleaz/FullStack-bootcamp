const express = require("express");

console.log("Hi Iam ");
const app = express();

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
