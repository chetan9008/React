import TopBar from "./../../components/TopBar/TopBar";
import SideBar from "./../../components/SideBar/SideBar";
import Feed from "./../../components/Feed/Feed";
import RightBar from "./../../components/RightBar/RightBar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};
export default Home;
