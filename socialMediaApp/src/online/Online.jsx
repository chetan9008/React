import "./Online.css";
const Online = ({ profilePicture, username }) => {
  return (
    <ul className="rightbarFriendList">
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img src={profilePicture} alt={username} className="rightbarImg" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarProfileUseraName">{username}</span>
      </li>
    </ul>
  );
};
export default Online;
