import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import Content from "../theme/Content";

const Partners = () => {
  return (
    <Content>
      <div className="flex justify-center items-center flex-col gap-5  text-center w-3/4 mx-auto pb-10">
        <h5 className="font-serif text-secondary font-semibold text-lg mt-16">
          Our Partners
        </h5>
        <h1 className="font-serif text-3xl md:text-4xl text-primary ">
          <span className="text-neutral">Our Awesome </span> Partners
        </h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={false}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          668: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="pb-10">
          <div>
            <img className="" src="https://i.ibb.co/MgpDp6h/cl-1.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10">
          <div>
            <img className="" src="https://i.ibb.co/3C2fXzP/cl-2.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10">
          <div>
            <img className="" src="https://i.ibb.co/991kg3C/cl-3.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10">
          <div>
            <img className="" src="https://i.ibb.co/fpZ6jgh/cl-4.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10">
          <div>
            <img className="" src="https://i.ibb.co/5KXrk2n/cl-5.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </Content>
  );
};

export default Partners;
