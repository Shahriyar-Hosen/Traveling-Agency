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

const TopCategoriesSlider = () => {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={false}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
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
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="my-5 pb-5">
          <div className="card card-compact w-44 h-44 bg-gray-100  shadow-xl">
            <figure>
              <img
                className="w-full p-12 pt-12 pb-4"
                src="https://i.ibb.co/KNMMDRd/hiking.png"
                alt="Package"
              />
            </figure>
            <div className="text-center text-2xl font-semibold font-serif">
              Hiking
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-5 pb-5">
          <div className="card card-compact w-44 h-44 bg-gray-100  shadow-xl">
            <figure>
              <img
                className="w-full p-12 pt-12 pb-4"
                src="https://i.ibb.co/JRRPkdK/sunbed.png"
                alt="Package"
              />
            </figure>
            <div className="text-center text-2xl font-semibold font-serif">
              Sunbed
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-5 pb-5">
          <div className="card card-compact w-44 h-44 bg-gray-100  shadow-xl">
            <figure>
              <img
                className="w-full p-12 pt-12 pb-4"
                src="https://i.ibb.co/9Nx1DmR/surf.png"
                alt="Package"
              />
            </figure>
            <div className="text-center text-2xl font-semibold font-serif">
              Surf
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-5 pb-5">
          <div className="card card-compact w-44 h-44 bg-gray-100  shadow-xl">
            <figure>
              <img
                className="w-full p-12 pt-12 pb-4"
                src="https://i.ibb.co/GPmC65f/safari.png"
                alt="Package"
              />
            </figure>
            <div className="text-center text-2xl font-semibold font-serif">
              Safari
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-5 pb-5">
          <div className="card card-compact w-44 h-44 bg-gray-100  shadow-xl">
            <figure>
              <img
                className="w-full p-12 pt-12 pb-4"
                src="https://i.ibb.co/8x3b9L7/cycling.png"
                alt="Package"
              />
            </figure>
            <div className="text-center text-2xl font-semibold font-serif">
              Cycling
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-5 pb-5">
          <div className="card card-compact w-44 h-44 bg-gray-100 shadow-xl">
            <figure>
              <img
                className="w-full p-12 pt-12 pb-4"
                src="https://i.ibb.co/Tt9cGxB/camping-tent.png"
                alt="Package"
              />
            </figure>
            <div className="text-center text-2xl font-semibold font-serif">
              Camping
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-5 pb-5">
          <div className="card card-compact w-44 h-44 bg-gray-100 shadow-xl">
            <figure>
              <img
                className="w-full p-12 pt-12 pb-4"
                src="https://i.ibb.co/Zg1rC3J/hiking-1.png"
                alt="Package"
              />
            </figure>
            <div className="text-center text-2xl font-semibold font-serif">
              Trekings
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopCategoriesSlider;
