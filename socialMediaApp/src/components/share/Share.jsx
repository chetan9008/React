import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import First from "./../../assets/person/1.jpeg";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={First} alt="" className="shareImage" />
          <input
            type="text"
            placeholder="What in your mind"
            className="shareInput"
          />
        </div>
        <hr className="shareHR" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareIconText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareIconText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon" />
              <span className="shareIconText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="golden" className="shareIcon" />
              <span className="shareIconText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};
export default Share;
