import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherDetails from "./WeatherDetails";
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
      date: new Date(response.data.dt * 1000),
      imageAlt: response.data.weather[0].description,
    });
  }

  function handleError() {
    setWeatherData(null);
    alert("Sorry, we could not find the weather information for this city.");
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeatherInfo).catch(handleError);

  return (
    <div className="row">
      {weatherData && (
        <>
          <div className="col-8 d-flex">
            <WeatherDetails weatherData={weatherData} />
          </div>
          <div className="col-4">
            <FormattedDate date={weatherData.date} />
          </div>
        </>
      )}
      {!weatherData && <p>Loading...</p>}
    </div>
  );
}
