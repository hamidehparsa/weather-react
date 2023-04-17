import React from "react";
import TempUnitConvertor from "./TempUnitConvertor";

export default function WeatherDetails(props) {
  let celsiusTemperature = props.weatherData.temperature;
  return (
    <div className="d-flex">
      <div className="d-inline">
        <img
          src={`https://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`}
          alt={props.weatherData.description}
        />
        <h3>{Math.round(celsiusTemperature)}°</h3>
        <TempUnitConvertor celsiusTemperature={celsiusTemperature} />
      </div>

      <div className="ml-3">
        <li>Humidity: {props.weatherData.humidity}%</li>
        <li>Wind: {props.weatherData.wind} km/h</li>
        <li>{props.weatherData.description}</li>
      </div>
    </div>
  );
}
