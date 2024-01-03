var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const axios = require("axios");

var expenseSchema = new Schema({
  item: String,
  amount: Number,
  date: Date,
  group: String,
});
//console.log(expenseSchema);
const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
