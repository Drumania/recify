import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

//Fake Api
import { sliderLarge } from "../API/api_slider_new";

const SliderLarge = ({ titleSlider }) => {
  return (
    <>
      <h2>{titleSlider}</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="swiperLarge"
      >
        {sliderLarge.map((element) => (
          <SwiperSlide
            key={element.id}
            style={{
              backgroundImage: `url(./src/assets/${element.bigImg})`,
              backgroundPosition: "center top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a href={element.slug} className="full-link" title={element.title}>
              {element.title}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderLarge;
