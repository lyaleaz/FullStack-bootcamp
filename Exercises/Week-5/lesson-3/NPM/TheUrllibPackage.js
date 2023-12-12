/* const urllib = require("urllib");

urllib.request(
  "http://data.nba.net/10s/prod/v1/2016/players.json",
  function (err, response) {
    console.log(response.toString());
  }
);
 */

const urllib = require("urllib");
const apiKey = "74270d78";
const movieTitle = "The Lion King";

const apiUrl = `http://www.omdbapi.com/?apikey=$74270d78&t=${encodeURIComponent(
  movieTitle
)}`;

urllib.request(apiUrl, function (err, response) {
  if (err) {
    console.error("Error:", err);
    return;
  }
  const responseData = JSON.parse(response.toString());
  console.log("Released:", responseData.Released);
});

console.log("hi");
