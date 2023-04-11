import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [info, setInfo] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setInfo(<Weather city={city} />);
  }

  function showCityInfo(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city name"
          onChange={showCityInfo}
        />
        <input type="submit" value="Search" />
      </form>
      <p>{info}</p>
    </div>
  );
}
