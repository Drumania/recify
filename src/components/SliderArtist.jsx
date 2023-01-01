import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import ThumbArtist from "./ThumbArtist";

//Fake Api
import { artist } from "../API/api_artist";

const SliderArtist = () => {
  return (
    <>
      <h2>Recomended Artist</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="swiperArtist"
      >
        {artist.map((element) => (
          <SwiperSlide key={element.id}>
            <ThumbArtist
              key={element.id}
              id={element.id}
              title={element.title}
              slug={element.slug}
              logo={element.logo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderArtist;
