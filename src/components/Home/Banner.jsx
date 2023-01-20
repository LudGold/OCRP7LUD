import React from "react";

export default function Banner() {
  return (
    <div className="banner-content">
      <img
        src="img-banner.png"
        alt="Paysage côte rocheuse"
        className="img-banner"
      />
      <h1 className="title-banner">
        Chez vous,
        <br /> partout et ailleurs
      </h1>
    </div>
  );
}
