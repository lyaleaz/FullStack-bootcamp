class Render {
  static displayError(message) {
    $("#results-container").html(`<div class="error">${message}</div>`);
  }

  static displayResults(recipes) {
    const resultsContainer = $("#results-container");
    resultsContainer.empty();

    const source = $("#recipe-template").html();
    const template = Handlebars.compile(source);

    recipes.forEach(function (recipe) {
      const recipeHtml = template({
        title: recipe.title,
        thumbnail: recipe.thumbnail,
        ingredients: recipe.ingredients.join(", "),
      });

      const recipeElement = $(recipeHtml);
      resultsContainer.append(recipeElement);

      const imageElement = recipeElement.find(".recipe-thumbnail");
      imageElement.on("click", function () {
        const firstIngredient = recipe.ingredients[0];
        alert("First Ingredient: " + firstIngredient);
      });
    });
  }
}
