import React from "react";

//content
import HeroSlider from "../components/HeroSlider";
import SliderLarge from "../components/SliderLarge";
// import NewMovieCard from "../components/NewMovieCard";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <SliderLarge titleSlider={"Trending"} />
      {/* <NewMovieCard /> */}
    </>
  );
};

export default Home;
