import "./RightBar.css";
import gift from "./../../assets/gift.png";
import ad from "./../../assets/ad.png";
import { Users } from "../../dummyData";
import Online from "../../online/Online";
const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
};
export default RightBar;
