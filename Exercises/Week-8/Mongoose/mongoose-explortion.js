const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/peopleDB", {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  // address: addressSchema,
});

const Person = mongoose.model("person", personSchema);

const p1 = new Person({ firstName: "Lyale", lastName: "Azbarka", age: 23 });
p1.save();
const p2 = new Person({ firstName: "Shoo", lastName: "azm", age: 50 });
const p3 = new Person({ firstName: "shoob", lastName: "aaa", age: 13 });
const p4 = new Person({ firstName: "asd", lastName: "abs", age: 21 });
const p5 = new Person({ firstName: "sh", lastName: "sh", age: 26 });

const allTheShooberts = [p2, p3, p4, p5];
allTheShooberts.forEach((s) => s.save());
Person.find({})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
/* Person.findByIdAndUpdate("6592969ee3298265792aa281", { age: 70 }).then(
  (updatedPerson) => {
    console.log(updatedPerson);
  }
); */

Person.findById("6592969ee3298265792aa281")
  .then((person) => {
    console.log(person);
  })
  .catch((err) => {
    console.error(err);
  });
Person.findByIdAndDelete("6592969ee3298265792aa281").then((person) => {
  console.log(person);
});
