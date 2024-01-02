const express = require("express");
const router = express.Router();

const Person = require("./Person");

router.get("/people", function (req, res) {
  Person.find({}).then(function (people) {
    res.send(people);
  });
});

module.exports = router;
