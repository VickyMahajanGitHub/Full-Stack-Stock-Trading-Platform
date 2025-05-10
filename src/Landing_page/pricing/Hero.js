// Hero.js
import React from "react";

function Hero({ imageURL, heading, description }) {
  return (
    <div className="col-4 p-5 text-center">
      <img src={imageURL} alt={heading} />
      <h2 className="fs-4 ">{heading}</h2>
      <p className="text-muted mt-4">{description}</p>
    </div>
  );
}

export default Hero;
