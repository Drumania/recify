import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

//Fake Api
import { movies } from "../API/api_movie";

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
        {movies.map(
          (element) =>
            element[condition] && (
              <SwiperSlide
                key={element.id}
                style={{
                  backgroundImage: `url(./src/assets/${element.bigImg})`,
                  backgroundPosition: "center top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a
                  href={element.slug}
                  className="full-link"
                  title={element.title}
                >
                  <label>{element.title}</label>
                </a>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
};

export default SliderLarge;
