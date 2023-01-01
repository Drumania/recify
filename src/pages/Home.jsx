import React from "react";

//content
import Hero from "../components/Hero";
import MadeforYou from "../components/MadeforYou";
import SliderLarge from "../components/SliderLarge";
import SliderArtist from "../components/SliderArtist";
import Genres from "../components/Genres";
import SliderPlaylist from "../components/SliderPlaylist";

const Home = () => {
  return (
    <>
      <div className="structure-home">
        <div>
          <Hero />
          <SliderLarge titleSlider={"Trending"} condition={"sliderHome"} />
          <br />
          <SliderArtist />
          <br />
          <Genres />
          <br />
          <SliderPlaylist />
          {/* <SliderLarge titleSlider={"News"} condition={"nuevas"} />
          <SliderLarge
            titleSlider={"Recently Played"}
            condition={"favoritas"}
          /> */}
        </div>
        <MadeforYou />
      </div>
    </>
  );
};

export default Home;
