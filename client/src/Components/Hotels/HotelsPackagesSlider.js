import React from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import PackagesCard from "../theme/PackagesCard";

const HotelsPackagesSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      loopFillGroupWithBlank={true}
      // freeMode={false}
      // grabCursor={true}
      // centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      navigation={false}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[FreeMode, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {/* 
      img,
      offers,
      title,
      location,
      des,
      price,
      ratting,
      hotel,
      */}
      <SwiperSlide className="pb-14">
        <Link to="/hotels/1">
          <PackagesCard
            img="https://i.ibb.co/QPdvFw1/LTI.jpg"
            offers="15% OFF"
            title="Leeds Castle"
            location="Croatia"
            des="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
            price="125"
            ratting="55"
            hotel
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="pb-14">
        <Link to="/hotels/1">
          <PackagesCard
            img="https://i.ibb.co/KsHgF2v/Luxury-Hotels.jpg"
            offers="15% OFF"
            title="Adriatic Adventure"
            location="Greece"
            des="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
            price="165"
            ratting="35"
            hotel
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="pb-14">
        <Link to="/hotels/1">
          <PackagesCard
            img="https://i.ibb.co/fXbs3QX/Conrad-Shenyang-Hilton-luxury-hotels.jpg"
            offers="15% OFF"
            title="The Spanish Riviera"
            location="Spain"
            des="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
            price="160"
            ratting="50"
            hotel
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="pb-14">
        <Link to="/hotels/1">
          <PackagesCard
            img="https://i.ibb.co/7pVMhhP/Hotels.png"
            offers="15% OFF"
            title="Vietnam Highlights"
            location="Vietnam"
            des="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
            price="110"
            ratting="35"
            hotel
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default HotelsPackagesSlider;
