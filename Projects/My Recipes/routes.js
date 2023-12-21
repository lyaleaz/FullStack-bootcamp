const express = require("express");
const axios = require("axios");
const { faker } = require("@faker-js/faker");

const router = express.Router();
const constAPI = require("./Consts/API");
const { dairyIngredients, glutenIngredients } = require("./Consts/consts");
const RECIPE_API = constAPI.RECIPE_API;

router.get("/word/:word", async (req, res) => {
  const word = req.params.word;
  const dairyFree = req.query.dairyFree === "true";
  const glutenFree = req.query.glutenFree === "true";

  try {
    const response = await axios.get(RECIPE_API + word);
    const filteredRecipes = response.data.results.map((recipe) => {
      const randomFirstName = faker.name.firstName();
      const randomLastName = faker.name.lastName();

      return {
        title: recipe.title,
        href: recipe.href,
        thumbnail: recipe.thumbnail,
        strArea: recipe.strArea,
        ingredients: recipe.ingredients,
        rating: RandomNum(),
        chef: `${randomFirstName} ${randomLastName}`,
      };
    });

    const recipesFil = filteredRecipes.filter((recipe) => {
      const hasDairy = recipe.ingredients.some((ingredient) =>
        dairyIngredients.includes(ingredient)
      );
      const hasGluten = recipe.ingredients.some((ingredient) =>
        glutenIngredients.includes(ingredient)
      );

      return (!dairyFree || !hasDairy) && (!glutenFree || !hasGluten);
    });

    res.json({ results: recipesFil });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

function RandomNum() {
  return Math.floor(Math.random() * 5) + 1;
}

module.exports = router;
