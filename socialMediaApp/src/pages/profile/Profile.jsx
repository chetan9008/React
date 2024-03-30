import TopBar from "./../../components/TopBar/TopBar";
import SideBar from "./../../components/SideBar/SideBar";
import Feed from "./../../components/Feed/Feed";
import RightBar from "./../../components/RightBar/RightBar";
import Cover from "./../../assets/post/3.jpeg";
import ProfileImg from "./../../assets/person/7.jpeg";
import "./profile.css";
const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={Cover} alt={Cover} className="profileCoverImg" />
              <img src={ProfileImg} alt={ProfileImg} className="profileImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileUserName">Chetan</h4>
              <p className="profileDesc">Hello my friends How are you ? </p>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
