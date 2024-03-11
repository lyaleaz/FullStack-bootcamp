import React, { useState } from "react";
import SearchContainer from "./SearchContainer";
import WeatherCard from "./WeatherCard";
import { useWeather } from "./WeatherContext";

function WeatherContainer() {
  const [cities, setCities] = useState([]);
  const { weatherData, updateWeatherData } = useWeather();

  const addCity = (cityData) => {
    setCities([...cities, cityData]);
  };

  const deleteCity = (cityId) => {
    setCities(cities.filter((city) => city.id !== cityId));
  };

  return (
    <div className="weather-container">
      <h2>Weather Forecast</h2>
      <SearchContainer addCity={addCity} />
      <div className="res">
        {cities.map((city) => (
          <WeatherCard key={city.id} city={city} deleteCity={deleteCity} />
        ))}
      </div>
    </div>
  );
}

export default WeatherContainer;
