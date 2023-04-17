import React, { useState } from "react";
import axios from "axios";
//import Weatherdetail from "./Weatherdetail";
//import Forecastdata from "./Forecastdata";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState(null);

  function showWeatherInfo(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      imageUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      imageAlt: response.data.weather[0].description,
    });
  }

  let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeatherInfo);
  //console.log(weatherData);
  let hour = null;
  let day = null;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let minute = null;
  if (weatherData) {
    hour = weatherData.date.getHours();
    day = days[weatherData.date.getDay()];
    minute = weatherData.date.getMinutes();
  }
  return (
    <div className="row">
      <div className="col-8 d-flex">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt={weatherData.description}
        />
        {weatherData.temperature}°C|°F
        <div>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/h</li>
        </div>
      </div>
      <div className="col-4">
        <li>
          {day}, {hour}:{minute}
        </li>
        <li>{weatherData.description}</li>
      </div>
    </div>
  );
}
