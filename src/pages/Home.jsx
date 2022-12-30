import React from "react";

//content
import Hero from "../components/Hero";
import MadeforYou from "../components/MadeforYou";
import SliderLarge from "../components/SliderLarge";

const Home = () => {
  return (
    <>
      <div className="structure-home">
        <div>
          <Hero />
          <SliderLarge titleSlider={"Trending"} condition={"sliderHome"} />
          <SliderLarge titleSlider={"Nuevas"} condition={"nuevas"} />
          <SliderLarge titleSlider={"Mi Lista"} condition={"favoritas"} />
        </div>
        <MadeforYou />
      </div>
    </>
  );
};

export default Home;
