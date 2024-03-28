import "./SideBar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { Users } from "../../dummyData";
import CloseFriend from "../../closeFriend/CloseFriend";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeedIcon className="sideBarIcon" />
            <span className="sideBarItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <ChatIcon className="sideBarIcon" />
            <span className="sideBarItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleIcon className="sideBarIcon" />
            <span className="sideBarItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <GroupsIcon className="sideBarIcon" />
            <span className="sideBarItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <BookmarksIcon className="sideBarIcon" />
            <span className="sideBarItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <HelpOutlineIcon className="sideBarIcon" />
            <span className="sideBarItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <WorkIcon className="sideBarIcon" />
            <span className="sideBarItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <EventIcon className="sideBarIcon" />
            <span className="sideBarItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <SchoolIcon className="sideBarIcon" />
            <span className="sideBarItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHR" />
        {Users.map((user) => (
          <CloseFriend {...user} key={user.id} />
        ))}
      </div>
    </div>
  );
};
export default SideBar;
