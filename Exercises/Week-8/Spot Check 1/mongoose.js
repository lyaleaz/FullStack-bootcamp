const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/computerDB");

const Schema = mongoose.Schema;

const computerSchema = new Schema({
  maker: String,
  price: Number,
});

const Computer = mongoose.model("Computer", computerSchema);

let c1 = new Computer({ maker: "HP", price: 1300 });
let c2 = new Computer({ maker: "Apple", price: 3900 });

c1.save()
  .then(() => c2.save)
  .then(() => {
    mongoose.connection.close();
  });
