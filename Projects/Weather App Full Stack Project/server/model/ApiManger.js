const axios = require("axios");
class ApiManager {
  constructor() {
    this.DataList = [];
  }
  getTheData(cityName) {
    try {
      const weather = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b9bc77a14f842265bdf461ea5338c13e&units=metric`
      );
      return weather;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      throw new Error("Invalid input");
    }
  }
  getList() {
    return this.DataList;
  }
  DataFilter(dataWeather) {
    return dataWeather.then((data) => {
      return {
        id: data.data.id,
        name: data.data.name,
        conditionPic: data.data.weather[0].icon,
        tempe: data.data.main.temp,
        condition: data.data.weather[0].description,
      };
    });
  }
}
module.exports = ApiManager;
