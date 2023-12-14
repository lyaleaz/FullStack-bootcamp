const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Server is up and running smoothly");
});

app.get("/priceCheck/:name", (req, res) => {
  const itemName = req.params.name;

  const item = store.find((item) => item.name === itemName);

  if (item) {
    res.json({ price: item.price });
  } else {
    res.json({ price: null });
  }
});
app.get("/priceCheck", function (request, response) {
  let item = store.find((name) => request.params.name === name.name);

  if (item) {
    let priceItem = item.price;
    response.send(`The Price for ${request.params.name} is : ${priceItem}`);
  } else {
    response.send(`Price: null`);
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
