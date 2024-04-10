import { useState } from "react";
import { StarIcon } from "../starIcon";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
};
const textStyle = {
  lineHeight: "1",
  margin: "0",
};

export const StarRating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(1);

  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <StarIcon
            key={i}
            onRate={() => {
              handleRating(i + 1);
            }}
            full={rating >= i + 1}
          />
        ))}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </div>
  );
};
