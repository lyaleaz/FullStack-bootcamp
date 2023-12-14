/* const changeColor = function (div) {
  div.style.backgroundColor = "#3498db";
}; */
const path = require("path");
const express = require("express");

const app = express();
/* 
app.use(express.static(path.join(__dirname, "dist")));

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
}); */
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(express.static(path.join(__dirname, "..", "node_modules")));
const fetchBookData = function () {
  let input = $("#book-input").val();

  $.get(`books/${input}`, function (bookData) {
    $("body").append(`<div>${bookData.title} - ${bookData.author}`);
  });
};
