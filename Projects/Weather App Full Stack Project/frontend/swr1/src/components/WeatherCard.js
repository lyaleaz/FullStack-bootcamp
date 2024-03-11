import React from "react";
import useSWR from "swr";

function WeatherCard({ city, deleteCity }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&&appid=b9bc77a14f842265bdf461ea5338c13e&units=metric`,
    fetcher
  );

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p className="temperature">{data.main.temp} &#8451;</p>
      <p className="condition">{data.weather[0].description}</p>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        alt="Weather Icon"
      />
      <div className="button-container">
        {city.inData ? (
          <i
            className="fa fa-trash ButtonDel"
            onClick={() => deleteCity(city.id)}
            style={{
              marginBottom: "40px",
              display: "flex",
              justifyItems: "start",
              color: "red",
            }}
          ></i>
        ) : (
          <i
            className="fa fa-plus ButtonSave"
            onClick={() => console.log("Add city logic here")}
            style={{
              marginBottom: "40px",
              display: "flex",
              justifyItems: "start",
              color: "green",
            }}
          ></i>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
