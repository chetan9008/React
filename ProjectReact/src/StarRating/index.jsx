import { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";
const StarRating = ({ number = 5 }) => {
  let [rating, setRating] = useState(0);
  let [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(number)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => {
              setRating(index);
            }}
            onMouseOver={() => {
              setHover(index);
            }}
            onMouseLeave={() => {
              setHover(rating);
            }}
            className={index <= (hover || rating) && "golden"}
            size={40}
          />
        );
      })}
    </div>
  );
};
export default StarRating;
