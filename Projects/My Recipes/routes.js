const express = require("express");
const axios = require("axios");
const router = express.Router();

const dairyIngredients = [
  "Cream",
  "Cheese",
  "Milk",
  "Butter",
  "Creme",
  "Ricotta",
  "Mozzarella",
  "Custard",
  "Cream Cheese",
];

const glutenIngredients = ["Flour", "Bread", "spaghetti", "Biscuits", "Beer"];

router.get("/:word", async (req, res) => {
  const word = req.params.word;
  const dairyFree = req.query.dairyFree === "true";
  const glutenFree = req.query.glutenFree === "true";

  try {
    const response = await axios.get(
      `https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${word}`
    );

    const filteredRecipes = response.data.results.filter((recipe) => {
      const hasDairy = recipe.ingredients.some((ingredient) =>
        dairyIngredients.includes(ingredient)
      );
      const hasGluten = recipe.ingredients.some((ingredient) =>
        glutenIngredients.includes(ingredient)
      );

      return (!dairyFree || !hasDairy) && (!glutenFree || !hasGluten);
    });

    res.json({ results: filteredRecipes });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;