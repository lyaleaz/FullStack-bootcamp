const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is up and running smoothly");
});
//EX2
app.get("/priceCheck/:name", (req, res) => {
  const itemName = req.params.name;
  const item = store.find((item) => item.name === itemName);

  res.json({ price: item ? item.price : null });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
app.get("/buy/:name", (req, res) => {
  const itemName = req.params.name;
  const itemIndex = store.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1 && store[itemIndex].inventory > 0) {
    store[itemIndex].inventory -= 1;
    res.json(store[itemIndex]);
  } else {
    res.json({ error: "Item not found" });
  }
});
app.get("/sale", (req, res) => {
  const isAdmin = req.query.admin === "true";

  if (isAdmin) {
    store.forEach((item) => {
      if (item.inventory > 10) {
        item.price *= 0.5;
      }
    });
  }

  res.send(store);
});
