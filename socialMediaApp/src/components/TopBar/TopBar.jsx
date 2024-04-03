import "./TopBar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import firstImage from "./../../assets/person/1.jpeg";
import { NavLink, Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to="/">
          <span className="logo">Social Media</span>
        </Link>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          {/* <span className="topBarLink">Homepage</span> */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `topBarLink ${isActive ? "active" : ""} `
            }
          >
            Home
          </NavLink>
          {/* <span className="topBarLink">TimeLine</span> */}
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `topBarLink ${isActive ? "active" : ""} `
            }
          >
            Profile
          </NavLink>
        </div>
        <div className="topBarIcons">
          <div className="topBarIcon">
            <PersonIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIcon">
            <ChatIcon />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIcon">
            <NotificationsIcon />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <Link to="/login">
          <img src={firstImage} alt="first" className="topBarImage" />
        </Link>
      </div>
    </div>
  );
};
export default TopBar;
