let currentPage = 1;
let resultPage = 5;

$("#searchButton").on("click", function () {
  const ingredient = $("#ingredient").val();
  const dairyFree = $("#dairyCheckbox").is(":checked");
  const glutenFree = $("#glutenCheckbox").is(":checked");
  const page = 1;

  APIManager.searchRecipes(
    ingredient,
    dairyFree,
    glutenFree,
    currentPage,
    resultPage
  );
});

$("#results-container").on("click", ".recipe-thumbnail", function () {
  const FristIng = $(this)
    .closest(".recipe-card")
    .find("li:first-child")
    .text();
  console.log(FristIng);
  alert("firs ingredient " + FristIng);
});

Handlebars.registerHelper("stars", function (n, block) {
  var html = "";
  let litStarClass = 'style="color: orange;"';
  for (let i = 1; i <= 5; ++i) {
    if (i > n) {
      litStarClass = 'style="color: grey;"';
    }
    html += `<i class="fa-solid fa-star" ${litStarClass}></i>`;
  }
  return html;
});

function sendEmail(title, href) {
  const subject = `Check out this recipe! ${title}`;
  const body = `You can see the recipe in this video ${href}`;
  const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
}

$("#nextButton").on("click", function () {
  currentPage++;

  APIManager.searchRecipes(
    $("#ingredient").val(),
    $("#dairyCheckbox").is(":checked"),
    $("#glutenCheckbox").is(":checked"),
    currentPage,
    resultsPerPage
  );
});
$("#PreviousButton").on("click", function () {
  if (currentPage > 1) currentPage--;

  APIManager.searchRecipes(
    $("#ingredient").val(),
    $("#dairyCheckbox").is(":checked"),
    $("#glutenCheckbox").is(":checked"),
    currentPage,
    resultsPerPage
  );
});
