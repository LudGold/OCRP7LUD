import React from "react";
import "../styles/stars.css";
/* import styled from 'styled-components' */

export default function Stars(ranking) {
  const stars_array = [1, 2, 3, 4, 5];

  return stars_array.map((rateIndex, starkey) =>
    rateIndex <= ranking.ranking ? (
     
      <img src="/full_star.png" alt="fullstar" key={starkey} />
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
