const express = require("express");
const axios = require("axios");
const { faker } = require("@faker-js/faker");

const router = express.Router();
const constAPI = require("./Consts/API");
const { dairyIngredients, glutenIngredients } = require("./Consts/consts");
const RECIPE_API = constAPI.RECIPE_API;
const API_KEY = "27OrgcfJOTOCzBf0NdWpgMpMZ6mOz6ow";

router.get("/word/:word", async (req, res) => {
  const word = req.params.word;
  const dairyFree = req.query.dairyFree === "true";
  const glutenFree = req.query.glutenFree === "true";

  const page = req.query.page || 1;
  try {
    const response = await axios.get(RECIPE_API + word);

    const filteredRecipes = await Promise.all(
      response.data.results.map(async (recipe) => {
        const randomFirstName = faker.name.firstName();
        const randomLastName = faker.name.lastName();
        const giphyAPI = axios.get(
          `http://api.giphy.com/v1/gifs/search?q=food&api_key=${API_KEY}`
        );
        console.log("test " + giphyAPI.data?.data[0]?.images?.original?.url);

        return {
          title: recipe.title,
          href: recipe.href,
          //thumbnail: recipe.thumbnail,
          thumbnail: giphyAPI.data?.data?.images?.original?.url,
          strArea: recipe.strArea,
          ingredients: recipe.ingredients,
          rating: RandomNum(),
          chef: `${randomFirstName} ${randomLastName}`,
        };
      })
    );
    const PageSize = 5;
    const firstPage = (page - 1) * PageSize;
    const lastPage = firstPage + PageSize;
    const recipesFil = filteredRecipes
      .filter((recipe) => {
        const hasDairy = recipe.ingredients.some((ingredient) =>
          dairyIngredients.includes(ingredient)
        );
        const hasGluten = recipe.ingredients.some((ingredient) =>
          glutenIngredients.includes(ingredient)
        );

        return (!dairyFree || !hasDairy) && (!glutenFree || !hasGluten);
      })
      .slice(firstPage, lastPage);

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
