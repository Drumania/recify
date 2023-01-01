import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import ThumbPlaylist from "./ThumbPlaylist";

//Fake Api
import { artist } from "../API/api_artist";

const SliderPlaylist = () => {
  return (
    <>
      <h2>Top Playlists</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="swiperPlaylists"
      >
        {artist.map((element) => (
          <SwiperSlide key={element.id}>
            <ThumbPlaylist />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SliderPlaylist;
