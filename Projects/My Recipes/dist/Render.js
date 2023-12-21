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
      const recipeHtml = template(recipe);

      const recipeElement = $(recipeHtml);
      resultsContainer.append(recipeHtml);
    });
  }
}
