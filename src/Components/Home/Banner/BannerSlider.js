import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper";

import banner1 from "../../../Assets/banner/banner1.png";
import banner2 from "../../../Assets/banner/banner-2.png";
import banner3 from "../../../Assets/banner/banner-3.png";

const BannerSlider = () => {
  return (
    <div className="max-h-[70vh]">
      <Swiper
        navigation={false}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="w-full min-h-[70vh]"
            style={{ background: `url(${banner1})`, backgroundSize: "cover" }}
          >
            <div className="bg-gray-900 bg-opacity-30 ">
              <div className=" max-w-3xl px-10 mx-auto w-sm h-[70vh] p-10 flex flex-col justify-center items-center pt-28">
                <h5 className="font-semibold text-white font-serif text-lg">
                  Amazing Places
                </h5>{" "}
                <h1 className="font-semibold text-white font-serif text-4xl md:text-5xl  py-7">
                  Make Your Trip Fun & Noted
                </h1>{" "}
                <p className="font-thin text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <button className="btn btn-primary hover:btn-secondary hover:text-white mt-10 text-white ">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full min-h-[70vh]"
            style={{ background: `url(${banner2})`, backgroundSize: "cover" }}
          >
            <div className="bg-gray-900 bg-opacity-30 ">
              <div className=" max-w-3xl px-10 mx-auto w-sm h-[70vh] p-10 flex flex-col justify-center items-center pt-28">
                <h5 className="font-semibold text-white font-serif text-lg">
                  Explore Travel
                </h5>{" "}
                <h1 className="font-semibold text-white font-serif text-4xl md:text-5xl  py-7">
                  Start Planning Your Dream Trip
                </h1>{" "}
                <p className="font-thin text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div className="flex justify-center items-center gap-5">
                  <button className="btn btn-primary hover:btn-secondary hover:text-white mt-10 text-white ">
                    Read More
                  </button>
                  <button className="btn btn-primary bg-[#17233e] hover:btn-secondary hover:text-white mt-10 text-white ">
                    Contact US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full min-h-[70vh]"
            style={{ background: `url(${banner3})`, backgroundSize: "cover" }}
          >
            <div className="bg-gray-900 bg-opacity-30 ">
              <div className=" max-w-3xl px-10 mx-auto w-sm h-[70vh] p-10 flex flex-col justify-center items-center pt-28">
                <h5 className="font-semibold text-white font-serif text-lg">
                  Road To Travel
                </h5>{" "}
                <h1 className="font-semibold text-white font-serif text-4xl md:text-5xl  py-7">
                  Begin your adventure with us
                </h1>{" "}
                <p className="font-thin text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <button className="btn btn-primary hover:btn-secondary hover:text-white mt-10 text-white ">
                  Make An Enquiry
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
