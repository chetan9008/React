import "./RightBar.css";
import gift from "./../../assets/gift.png";
import ad from "./../../assets/ad.png";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const RightBarFollowing = ({ username, profilePicture }) => {
  return (
    <div className="rightBarFollowing">
      <img
        src={profilePicture}
        alt={username}
        className="rightBarFollowingImg"
      />
      <span className="rightBarFollowingName">{username}</span>
    </div>
  );
};

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={gift} alt={gift} className="birthdayImg" />
          <span className="birthdayText">
            <b>Aman</b> and <b>three others</b> have birthday today
          </span>
        </div>
        <img src={ad} alt={ad} className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        {Users.map((user) => (
          <Online {...user} key={user.id} />
        ))}
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Saharanpur</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">India</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          {Users.filter((user) => {
            if (user.id <= 5) return true;
          }).map((user) => (
            <RightBarFollowing {...user} />
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};
export default RightBar;
