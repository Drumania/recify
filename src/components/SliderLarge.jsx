import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import ThumbContent from "./ThumbContent";

//Fake Api
import { contents } from "../API/api_content";

const SliderLarge = ({ titleSlider, condition }) => {
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
        {contents.map(
          (element) =>
            element[condition] && (
              <SwiperSlide key={element.id}>
                <ThumbContent
                  id={element.id}
                  bigImg={element.bigImg}
                  slug={element.slug}
                  title={element.title}
                  director={element.director}
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
};

export default SliderLarge;
