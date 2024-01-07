const axios = require("axios");
class ApiManager {
  constructor() {
    this.DataList = [];
  }
  getTheData(cityName) {
    const weather = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b9bc77a14f842265bdf461ea5338c13e&units=metric`
    );
    return weather;
  }
  getList() {
    return this.DataList;
  }
}
module.exports = ApiManager;
