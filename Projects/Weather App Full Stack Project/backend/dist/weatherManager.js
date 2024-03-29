class WeatherManager {
  constructor() {
    this.weatherList = [];
  }
  getList() {
    return this.weatherList;
  }
  async getCityName(cityName) {
    try {
      const weather = await $.get(`/weathers/${cityName}`);
      this.weatherList.push(weather);
      return weather;
    } catch (error) {
      console.error("Error fetching weather data:", error.responseJSON);
      alert("City not found");
    }
  }

  async addToList(weather) {
    this.weatherList.push(weather);
  }

  async saveDataById(idData) {
    return $.post(`/weathers/${idData}`);
  }

  getNameOfWeatherById(id) {
    const i = this.weatherList.findIndex((x) => x.id == id);
    const name = this.weatherList[i].name;
    this.weatherList.splice(i, 1);
    return name;
  }
  async deleteWeather(id) {
    const cityName = this.getNameOfWeatherById(id);
    const delWeather = await $.ajax({
      url: `/weathers/${cityName}`,
      type: "DELETE",
      success: function (result) {},
    });
    return delWeather;
  }
  changeStatus(weather, id) {
    weather.id = id;
    weather.inData = true;
    const i = this.weatherList.findIndex((x) => x.id === parseInt(weather.id));
    this.weatherList[i] = weather;
  }
  async getWeatherByCityName(cityname) {
    try {
      const theWeather = await $.get(`/weathers/${cityname}`);
      this.addToTheList(theWeather);
      return theWeather;
    } catch (error) {
      console.error("Error fetching weather data:", error.responseJSON);
      if (error.responseJSON === "City not found") {
        alert("City not found");
      }
    }
  }

  async getAllTheWeathersData() {
    const allDB = $.get(`/weathers`);
    allDB.forEach((element) => {
      element.inData = true;
    });
    this.weatherList = allDB;
    return allDB;
  }
}
