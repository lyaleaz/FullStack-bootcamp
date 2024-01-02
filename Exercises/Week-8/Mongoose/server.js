// Server setup
const express = require("express");
const app = express();
const api = require("./server/routes/api");
const Person = require("./server/routes/Person");

// Mongoose setup
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/peopleDB", {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));

app.use("/", api);

const port = 4200;
//ex1
app.put("/person/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPerson = await Person.findByIdAndUpdate(
    id,
    { age: 80 },
    { new: true }
  ).then(function (boo) {
    res.send(boo);
  });
});

//ex2
app.delete("/apocalypse", async (req, res) => {
  Person.deleteMany({}).then(function () {
    res.send("All the data deleted");
  });
});
//ex3
app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
