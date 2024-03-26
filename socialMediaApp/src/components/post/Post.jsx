import "./post.css";
import First from "./../../assets/person/1.jpeg";
import Post1 from "./../../assets/post/1.jpeg";
import Like from "./../../assets/like.png";
import Heart from "./../../assets/heart.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopRight">
            <img src={First} alt={First} className="postProfileImg" />
            <span className="postUserName">Chetan</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopLeft">
            <MoreVertIcon className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey this is my first post</span>
          <img src={Post1} alt={Post1} className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={Like} alt={Like} className="likeImg" />
            <img src={Heart} alt={Heart} className="likeImg" />
            <span className="postLikeCounter">20 likes</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">19 Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
