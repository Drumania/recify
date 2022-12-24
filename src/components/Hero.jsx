import React from "react";

//Fake Api
import { contents } from "../API/api_content";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(./src/assets/${contents[0].bigImg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay">
        <label>{contents[0].director}</label>
        <h1>{contents[0].title}</h1>
        {contents[0].year}
        <span>{contents[0].duration}</span>
        <a href={contents[0].slug} className="btn-primary">
          Ver
        </a>
      </div>
    </div>
  );
};

export default Hero;
