const rend = new Render();
const Manager = new WeatherManager();
/* const mongoDB = function () {
  const displayDB = Manager.getAllTheWeathersData();
  displayDB.then((data) => {
    rend.display(data);
  });
};
mongoDB(); */
$("#searchButton").on("click", async function () {
  const textSearch = $("#searchInput").val();
  const weatherData = await Manager.getCityName(textSearch);
  rend.display([weatherData]);
});
$("#cities-container").on("click", ".ButtonSave", function () {
  $("#cities-container").empty();
  const idWeather = $(this).attr("id");
  const saveData = Manager.saveDataById(idWeather);
  saveData.then((resWeather) => {
    Manager.changeStatus(resWeather, idWeather);
    rend.display(Manager.getList());
  });
});

$("#cities-container").on("click", ".ButtonDel", function () {
  $("#cities-container").empty();
  const idWeather = $(this).attr("id");
  const deleteData = Manager.deleteWeather(idWeather);
  deleteData.then((res) => {
    console.log(res);
  });
  rend.display(Manager.getList());
});
