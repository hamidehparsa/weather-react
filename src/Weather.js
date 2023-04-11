import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [imageUrl, setImageUrl] = useState("");
  let [imageAlt, setImageAlt] = useState(null);

  function showWeatherInfo(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setImageUrl(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setImageAlt(response.data.weather[0].description);
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeatherInfo);
  if (temperature) {
    return (
      <div>
        <li>Temperature: {Math.round(temperature)}°C </li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}% </li>
        <li>Wind: {wind}km/h </li>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    );
  } else {
    return <p>The city does not exist</p>;
  }
}
