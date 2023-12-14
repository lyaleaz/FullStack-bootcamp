const express = require("express");
const app = express();
const port = 3000;

app.get("/details", (req, res) => {
  const { zipcode, city, middleName } = req.query;

  console.log("City:", city);

  res.json({
    zipcode: "6863155",
    city: "Ankh Morpork",
    middleName: "Wilfred",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
