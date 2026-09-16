import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SIZE_STYLES = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const StarRating = ({ rating, size = "md" }) => {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {[...Array(5)].map((_, starIndex) => (
        <FontAwesomeIcon
          key={starIndex}
          icon={faStar}
          className={`${SIZE_STYLES[size]} ${
            starIndex < rating
              ? "text-orange-500"
              : "text-gray-200 dark:text-gray-700"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
