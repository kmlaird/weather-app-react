import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import "./Search.css";

export default function Search() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(<CurrentWeather />);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city here."
          className="search-input"
        ></input>
        <input type="submit" value="Search" className="search-submit"></input>
      </form>
      {message}
    </div>
  );
}
