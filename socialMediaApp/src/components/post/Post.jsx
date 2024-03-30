import "./post.css";
import First from "./../../assets/person/1.jpeg";
import Like from "./../../assets/like.png";
import Heart from "./../../assets/heart.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import { useState } from "react";
const Post = ({ id, desc, photo, date, like, comment }) => {
  let [likeState, setLike] = useState(like);
  let [isLiked, setIsLiked] = useState(false);
  let likeHandler = () => {
    setLike(isLiked ? likeState - 1 : likeState + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopRight">
            <img
              src={Users.filter((user) => user.id === id)[0].profilePicture}
              alt={First}
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((user) => user.id === id)[0].username}
            </span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopLeft">
            <MoreVertIcon className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img src={photo} alt={id} className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={Like}
              alt={Like}
              className="likeImg"
              onClick={likeHandler}
            />
            <img
              src={Heart}
              alt={Heart}
              className="likeImg"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{likeState} likes</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{comment} Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
