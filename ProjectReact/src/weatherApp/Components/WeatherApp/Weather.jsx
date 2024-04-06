import "./weather.css";

import search from "./../../assests/search.png";
import clear from "./../../assests/clear.png";
import cloud from "./../../assests/cloud.png";
import drizzle from "./../../assests/drizzle.png";
import humidity from "./../../assests/humidity.png";
import rain from "./../../assests/rain.png";
import snow from "./../../assests/snow.png";
import wind from "./../../assests/wind.png";
import { useCallback, useEffect, useState } from "react";
const Weather = () => {
  let [location, setLoaction] = useState("");
  let apiKey = "5869f8aa5f0553edd0d26781d6c0af29";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${apiKey}`;
  let [status, setStatus] = useState(false);
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  let SearchFun = async () => {
    if (location === "") return 0;
    setLoading(true);
    let response = await fetch(url);
    let Data = await response.json();
    if (Data) {
      setData(Data);
      setLoading(false);
    }
    setStatus(false);
    console.log(data);
  };

  useEffect(() => {
    SearchFun();
  }, [status]);

  if (loading) return <h1>Loading...</h1>;

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
        <div
          className="topbarImg"
          onClick={() => {
            setStatus(true);
          }}
        >
          <img src={search} alt={search} />
        </div>
      </div>
      <div className="weatherImg">
        <img src={cloud} alt={cloud} />
      </div>
      <div className="weatherTem">
        {data.length === 0 ? "25'c" : data.main.temp}
      </div>
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
