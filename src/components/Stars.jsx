import React from "react";

export default function Stars(props) {
  const stars_array = [1, 2, 3, 4, 5];

  return stars_array.map((rateIndex, starkey) =>
    rateIndex <= props.props ? (
      <img
        className="full_star"
        src="/full_star.png"
        alt="fullstar"
        key={starkey}
      />
    ) : (
      <img
        className="empty_star"
        src="/empty_star.png"
        alt="emptystar"
        key={starkey}
      />
    )
  );
}
