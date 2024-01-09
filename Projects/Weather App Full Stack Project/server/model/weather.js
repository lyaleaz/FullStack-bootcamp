var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var weatherSchema = new Schema({
  id: Number,
  name: String,
  temperature: Number,
  condition: String,
  conditionPic: String,
});
const Weather = mongoose.model("Expense", weatherSchema);
module.exports = Weather;
