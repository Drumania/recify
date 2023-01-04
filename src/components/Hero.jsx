import React from "react";

//Fake Api
import { contents } from "../API/api_content";

const Hero = () => {
  return (
    <>
      {/* <h2>Last Release</h2> */}
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
          <a className="hero-artist" href={contents[0].slugArtist}>
            {contents[0].artist}
          </a>
          <h1>{contents[0].title}</h1>
          {contents[0].year} &bull; {contents[0].duration}
          <a href={`/s/` + contents[0].slug} className="btn-primary">
            Ver
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
