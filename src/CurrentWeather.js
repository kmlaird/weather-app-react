import React from "react";
import Forecast from "./Forecast";

export default function CurrentWeather() {
  return (
    <div>
      <h2>Currently in City</h2>
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col">
              <p>icon</p>
              <p>Cloudy</p>
            </div>
            <div className="col">
              <p>28°F</p>
              <p>Feels like 26°F</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <p>Humidity: 60%</p>
          <p>Wind: 5mph</p>
          <p>Visibility: 10 miles</p>
        </div>
        <div className="col-4">
          <p>Sunrise</p>
          <p>Sunset</p>
        </div>
      </div>
      <Forecast />
    </div>
  );
}
