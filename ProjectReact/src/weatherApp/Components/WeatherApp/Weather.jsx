import "./weather.css";

import search from "./../../assests/search.png";
import clear from "./../../assests/clear.png";
import cloud from "./../../assests/cloud.png";
import drizzle from "./../../assests/drizzle.png";
import humidity from "./../../assests/humidity.png";
import rain from "./../../assests/rain.png";
import snow from "./../../assests/snow.png";
import wind from "./../../assests/wind.png";
import { useState } from "react";
const Weather = () => {
  let apiKey = "5869f8aa5f0553edd0d26781d6c0af29";

  let [location, setLoaction] = useState("");

  let SearchFun = () => {
    if (location === "") return 0;
  };

  return (
    <div className="container">
      <div className="topbar">
        <input
          type="text"
          className="topbarInput"
          placeholder="search"
          value={location}
          onChange={(e) => {
            setLoaction(e.target.value);
          }}
        />
        <div className="topbarImg">
          <img src={search} alt={search} />
        </div>
      </div>
      <div className="weatherImg">
        <img src={cloud} alt={cloud} />
      </div>
      <div className="weatherTem">24*c</div>
      <div className="weatherLocation">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt={humidity} className="icon" />
          <div className="data">
            <div className="dataUnit">20%</div>
            <div className="text">humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt={wind} className="icon" />
          <div className="data">
            <div className="dataUnit">80 km/h</div>
            <div className="text">wind</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
