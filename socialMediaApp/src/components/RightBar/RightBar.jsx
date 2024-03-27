import "./RightBar.css";
import gift from "./../../assets/gift.png";
import ad from "./../../assets/ad.png";
import freind from "./../../assets/person/3.jpeg";
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
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={freind} alt={freind} className="rightbarImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarProfileUseraName">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={freind} alt={freind} className="rightbarImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarProfileUseraName">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={freind} alt={freind} className="rightbarImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarProfileUseraName">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={freind} alt={freind} className="rightbarImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarProfileUseraName">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={freind} alt={freind} className="rightbarImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarProfileUseraName">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={freind} alt={freind} className="rightbarImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarProfileUseraName">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={freind} alt={freind} className="rightbarImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarProfileUseraName">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={freind} alt={freind} className="rightbarImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarProfileUseraName">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={freind} alt={freind} className="rightbarImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarProfileUseraName">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RightBar;
