import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";

export default function Search() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(<CurrentWeather />);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city here."></input>
        <input type="submit" value="Search"></input>
      </form>
      {message}
    </div>
  );
}
