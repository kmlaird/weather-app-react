import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h2>Forecast for City</h2>
      <div className="row">
        <div className="col ft">
          <p>icon</p>
          <p> 20°F | 14°F</p>
        </div>
        <div className="col ft">
          <p>icon</p>
          <p> 20°F | 14°F</p>
        </div>
        <div className="col ft">
          <p>icon</p>
          <p> 20°F | 14°F</p>
        </div>
        <div className="col ft">
          <p>icon</p>
          <p> 20°F | 14°F</p>
        </div>
        <div className="col ft">
          <p>icon</p>
          <p> 20°F | 14°F</p>
        </div>
      </div>
    </div>
  );
}
