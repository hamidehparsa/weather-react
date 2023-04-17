import React, { useState } from "react";

export default function TempUnitConvertor(props) {
  let [temperature, SetTemperature] = useState(props.celsiusTemperature);
  //const [isCelsius, setIsCelsius] = useState(true);

  function showCelsius(event) {
    event.preventDefault();
    //setIsCelsius(true);
    SetTemperature(props.celsiusTemperature);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    //setIsCelsius(false);
    SetTemperature(props.celsiusTemperature * 1.8 + 32);
  }

  return (
    <div>
      <h3>{Math.round(temperature)}°</h3>

      <div>
        <button className="celsius btn btn-link p-0" onClick={showCelsius}>
          C
        </button>
        <button
          className="fahrenheit btn btn-link p-0"
          onClick={showFahrenheit}
        >
          F
        </button>
      </div>
    </div>
  );
}
