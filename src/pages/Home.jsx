import React from "react";

//content
import HeroSlider from "../components/HeroSlider";
import SliderLarge from "../components/SliderLarge";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <SliderLarge titleSlider={"Trending"} condition={"sliderHome"} />
      <SliderLarge titleSlider={"Nuevas"} condition={"nuevas"} />
      <SliderLarge titleSlider={"Mi Lista"} condition={"favoritas"} />
    </>
  );
};

export default Home;
