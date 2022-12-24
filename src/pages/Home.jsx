import React from "react";

//content
import Hero from "../components/Hero/";
import SliderLarge from "../components/SliderLarge";

const Home = () => {
  return (
    <>
      <Hero />
      <SliderLarge titleSlider={"Trending"} condition={"sliderHome"} />
      <SliderLarge titleSlider={"Nuevas"} condition={"nuevas"} />
      <SliderLarge titleSlider={"Mi Lista"} condition={"favoritas"} />
    </>
  );
};

export default Home;
