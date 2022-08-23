import React from "react";
// import Swiper core and required modules
import { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//Fake Api
import { sliderHero } from "../API/api_slider_hero";

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
      {sliderHero.map((element) => (
        <SwiperSlide
          key={element.id}
          style={{
            backgroundImage: `url(./src/assets/${element.bigImg})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="swiper-hero-overlay">
            <span>{element.category}</span>
            <h1>{element.title}</h1>
            <a href={element.slug} className="btn-primary">
              Ver
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
