const express = require("express");
const router = express.Router();
router.get("/recipes/:word", function (req, res) {
  const word = req.params.ingredient;
  const apiUrl = `https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${word}`;

  fetch(
    `https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${word}`
  )
    .then((x) => {
      console.log(x);
      return x.json();
    })
    .then((y) => {
      console.log(y);
      res.send(yu);
    });
});
