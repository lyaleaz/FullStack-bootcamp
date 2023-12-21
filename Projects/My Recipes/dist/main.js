$("#searchButton").on("click", function () {
  const ingredient = $("#ingredient").val();
  const dairyFree = $("#dairyCheckbox").is(":checked");
  const glutenFree = $("#glutenCheckbox").is(":checked");

  APIManager.searchRecipes(ingredient, dairyFree, glutenFree);
});
