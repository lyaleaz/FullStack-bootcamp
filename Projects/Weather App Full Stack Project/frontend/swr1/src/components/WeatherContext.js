import React, { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const updateWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, updateWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
