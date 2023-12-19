
class Render {
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

      resultsContainer.append(recipeHtml);
    });
  }
}
