import React from "react";
// import Swiper core and required modules
import { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//Fake Api
import { movies } from "../API/api_movie";

const HeroSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      pagination={{ clickable: true }}
      className="HeroSlider"
    >
      {movies.map(
        (element) =>
          element.sliderHome && (
            <SwiperSlide
              key={element.id}
              style={{
                backgroundImage: `url(./src/assets/${element.bigImg})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="swiper-hero-overlay">
                <h1>{element.title}</h1>
                <label>
                  <span>{element.duration}</span>
                  {element.year}, {element.director}
                </label>
                <a href={element.slug} className="btn-primary">
                  Ver
                </a>
              </div>
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};

export default HeroSlider;
