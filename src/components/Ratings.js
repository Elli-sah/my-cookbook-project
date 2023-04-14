import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
//ratings sparas men är endast dom man
//fyllt i själv, skulle behöva ändras
//till genomsittligt betyg, gärna att
//det är lite transparent, sen onHover
//lysa upp med starkare kontrast

function Star({ selected, onSelect }) {
  return (
    <div onClick={onSelect}>
      {selected ? <FaStar color="#ffc107" /> : <FaStar color="#e4e5e9" />}
    </div>
  );
}

function Ratings({ id }) {
  const [rating, setRating] = useState(
    parseInt(localStorage.getItem(`${id}-rating`)) || 0
  );

  useEffect(() => {
    localStorage.setItem(`${id}-rating`, rating);
  }, [id, rating]);

  const handleSelect = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="ratings">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onSelect={() => handleSelect(index)}
        />
      ))}
    </div>
  );
}

export default Ratings;
