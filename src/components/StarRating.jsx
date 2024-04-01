import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../StarRating.scss";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      <div className="star-container">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="star"
                key={star}
                size={25}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default StarRating;
