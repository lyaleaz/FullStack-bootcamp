const cors = require("cors");
const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
const recipesRoutes = require("./routes");

app.use("/recipes", recipesRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
