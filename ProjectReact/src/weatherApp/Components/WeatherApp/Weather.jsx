import "./weather.css";

import search from "./../../assests/search.png";
import clear from "./../../assests/clear.png";
import cloud from "./../../assests/cloud.png";
import drizzle from "./../../assests/drizzle.png";
import humidityImg from "./../../assests/humidity.png";
import rain from "./../../assests/rain.png";
import snow from "./../../assests/snow.png";
import wind from "./../../assests/wind.png";
import { useEffect, useState } from "react";
const Weather = () => {
  let [location, setLoaction] = useState("");
  let [error, setError] = useState(false);
  let apiKey = "5869f8aa5f0553edd0d26781d6c0af29";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${apiKey}`;
  let [status, setStatus] = useState(false);
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [wicon, setWicon] = useState(cloud);

  if (data.length !== 0) {
    var {
      name,
      main: { temp, humidity },
      wind: { speed },
      weather: {
        [0]: { icon },
      },
    } = data;
  }

  let WeatherIcon = (icon) => {
    switch (icon) {
      case "Clear":
        setWicon(clear);
        break;
      case "Clouds":
        setWicon(cloud);
        break;
      case "Drizzle":
        setWicon(drizzle);
        break;
      case "Snow":
        setWicon(snow);
        break;
      case "Rain":
        setWicon(rain);
        break;
    }
  };

  let SearchFun = async () => {
    if (location === "") return 0;
    setLoading(true);
    let response = await fetch(url);

    if (response.ok === false) {
      setError(true);
      return;
    }

    let Data = await response.json();
    if (Data) {
      setData(Data);
      setLoading(false);
    }
    setStatus(false);
    WeatherIcon(Data.weather[0].main);
  };

  useEffect(() => {
    SearchFun();
  }, [status]);

  if (error) {
    window.location.reload();
    return <h1> Entered city is not found</h1>;
  }

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
        <img
          // src={`http://openweathermap.org/img/w/${icon ? icon : "04d"}.png`}
          src={wicon}
          alt={cloud}
        />
      </div>
      <div className="weatherTem">
        {temp ? Math.floor(temp) + "\u00b0c" : "10\u00b0c"}
      </div>
      <div className="weatherLocation">{name ? name : "London"}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityImg} alt={humidityImg} className="icon" />
          <div className="data">
            <div className="dataUnit">{speed ? Math.floor(speed) : 20}%</div>
            <div className="text">humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt={wind} className="icon" />
          <div className="data">
            <div className="dataUnit">
              {humidity ? Math.floor(humidity) : 80} km/h
            </div>
            <div className="text">wind</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
