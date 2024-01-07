var bodyParser = require("body-parser");
var express = require("express");
var app = express();
const apiRoutes = require("./server/routes/api");
var mongoose = require("mongoose");
const Expense = require("./server/model/Expense");

mongoose
  .connect("mongodb://127.0.0.1:27017/expenseSchema", {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiRoutes);
/* app.get("/expenses", function (req, res) {
  Expense.find({})
    .sort({ date: -1 })

    .then(function (boo) {
      res.send(boo);
    });
}); */
app.listen(3000, function () {
  console.log(`Server is running on port ${PORT}`);
});
