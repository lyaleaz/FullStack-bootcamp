$(document).ready(function () {
  $("#colorChangeDiv").on("click", function () {
    $(this).css("background-color", "#f39c12");
  });
});
const urllib = require("urllib");

urllib.request(
  "http://data.nba.net/10s/prod/v1/2016/players.json",
  function (err, response) {
    console.log(response.toString());
  }
);
