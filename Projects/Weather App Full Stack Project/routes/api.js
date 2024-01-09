const express = require("express");
const router = express.Router();
const ApiManager = require("../server/model/ApiManger");
const Weather = require("../server/model/weather");

const apiManager = new ApiManager();

const DataFilter = function (dataWeather) {
  return dataWeather.then((data) => {
    return {
      id: data.data.weather[0].id,
      name: data.data.name,
      conditionPic: data.data.weather[0].icon,
      tempe: data.data.main.temp,
      condition: data.data.weather[0].description,
    };
  });
};
router.get("/weathers/:cityName", async (req, res) => {
  const cityName = req.params.cityName;
  const data = apiManager.getTheData(cityName);
  const filterData = DataFilter(data);

  filterData.then((weatherData) => {
    apiManager.DataList.push(weatherData);
    res.json(weatherData);
  });
});

/* router.get("/weathers/:cityName", async (req, res) => {
  const cityName = req.params.cityName;
  const data = apiManager.getTheData(cityName);
  const filterData = DataFilter(data);
  //  console.log(filterData);

  filterData.then((weatherData) => {
    apiManager.DataList.push(weatherData);
    res.send(weatherData);
  });
}); */
/* router.post("/weathers/:id", function (req, res) {
  const id = req.params.id;
  console.log(apiManager.getList());
  const newCity = new Weather(
    apiManager.getTheData().find((data) => data.id === parsInt(id))
  );
  newCity.save().then(() => res.send(newCity));
}); */
/* router.post("/weathers/:id", function (req, res) {
  const id = req.params.id;
  const newCity = new Weather(
    apiManager.getTheData().find((data) => data.id === parseInt(id))
  );
  newCity.save().then(() => res.send(newCity));
}); */
router.post("/weathers/:id", function (req, res) {
  const weatherId = req.params.id;
  const newData = new Weather(
    apiManager.DataList.find(
      (weatherID) => weatherID.id === parseInt(weatherId)
    )
  );
  newData.save().then(() => res.send(newData));
});

router.post("/weathers", function (req, res) {
  const name = req.body.name;
  const temperature = req.body.tempe;
  const conditionPic = req.body.conditionPic;
  const condition = req.body.condition;
  console.log(name, temperature, conditionPic, condition);
  const newData = new Weather({
    name: name,
    tempe: temperature,
    conditionPic: conditionPic,
    condition: condition,
  });
  newData.save();
  res.send(newData);
});
router.delete("/weathers/:cityName", function (req, res) {
  Weather.find({ name: req.params.cityName }).deleteOne().exec();
  res.send("the data deleted");
});
module.exports = router;
