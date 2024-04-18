import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Images
import Discount from "../../../images/Discount.jpg"

export default function App() {
  return (
    <div className="Swiper">
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Discount} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Discount} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Discount} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Discount} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Discount} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Discount} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Discount} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
