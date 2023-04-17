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
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city name"
                onChange={showCityInfo}
                size="50"
              />
            </div>
            <div className="col-3">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </div>
        </form>
      </div>
      <p>{info}</p>
    </div>
  );
}
