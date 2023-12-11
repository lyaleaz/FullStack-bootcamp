$(document).ready(function () {
  const apiManager = new APIManager();
  const renderer = new Renderer();
  const loadUserDataButton = $("#loadUserData");
  loadUserDataButton.on("click", function () {
    $.when(
      apiManager.promiseForUsers(),
      apiManager.promiseQuote(),
      apiManager.promisePoke(),
      apiManager.promiseAboutMe()
    ).then(() => {
      renderer.data = apiManager.data;
      renderer.renderUserData();
      api;
    });
  });
});
