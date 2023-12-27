class APIManager {
  static async searchRecipes(
    ingredient,
    dairyFree,
    glutenFree,
    page = 1,
    PageSize = 5
  ) {
    try {
      if (!ingredient) {
        const errorMessage = "Invalid input: Please enter a valid ingredient";
        Render.displayError(errorMessage);
        return;
      }

      const response = await $.ajax({
        url: `http://localhost:3000/recipes/word/${ingredient}?dairyFree=${dairyFree}&glutenFree=${glutenFree}`,
        dataType: "json",
      });

      if (response && response.results) {
        Render.displayResults(response.results);
      } else {
        console.error("Invalid API response:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      console.log("Error status:", error.status);
      console.log("Error message:", error.statusText);

      Render.displayError("Error fetching data. Please try again later.");
    }
  }
}
