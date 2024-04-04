import "./weather.css";

import search from "./../../assests/search.png";
import clear from "./../../assests/clear.png";
import cloud from "./../../assests/cloud.png";
import drizzle from "./../../assests/drizzle.png";
import humidity from "./../../assests/humidity.png";
import rain from "./../../assests/rain.png";
import snow from "./../../assests/snow.png";
import wind from "./../../assests/wind.png";
const Weather = () => {
  return (
    <div className="container">
      <div className="topbar">
        <input type="text" className="topbarInput" placeholder="search" />
        <div className="topbarImg">
          <img src={search} alt={search} />
        </div>
      </div>
    </div>
  );
};
export default Weather;
