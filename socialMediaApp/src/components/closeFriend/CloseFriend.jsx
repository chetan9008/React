import "./closeFriend.css";
const CloseFriend = ({ profilePicture, username }) => {
  return (
    <ul className="sideBarFriendLIst">
      <li className="sideBarFriend">
        <img src={profilePicture} alt={username} className="sideBarFriendImg" />
        <span className="sideBarFriendName">{username}</span>
      </li>
    </ul>
  );
};
export default CloseFriend;
