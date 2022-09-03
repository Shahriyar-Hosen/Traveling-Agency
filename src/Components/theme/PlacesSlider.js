import React, { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
/*     
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      spaceBetween={30}
      // centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
      className="mySwiper"
*/

const PlacesSlider = () => {
  const [viewport, setViewport] = useState(window.visualViewport.width);
  const [view, setView] = useState(3);

  useEffect(() => {
    setViewport(window.visualViewport.width);
    // console.log(window.visualViewport.width);
  }, [setViewport, viewport]);

  console.log(viewport);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div>
            <div className="w-96">
              <img
                className="w-32 h-72 md:w-96 md:h-96 rounded-lg"
                src="https://i.ibb.co/sRMwdrN/cox-s-bazar.jpg"
                alt=""
              />
            </div>
            <h1 className="text-2xl font-bold my-3 mx-2">Hello</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="w-96">
              <img
                className="w-32 h-72 md:w-96 lg:h-96 rounded-lg"
                src="https://i.ibb.co/sRMwdrN/cox-s-bazar.jpg"
                alt=""
              />
            </div>
            <h1 className="text-2xl font-bold my-3 mx-2">Hello</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="w-96">
              <img
                className="w-32 h-72 md:w-96 lg:h-96 rounded-lg"
                src="https://i.ibb.co/sRMwdrN/cox-s-bazar.jpg"
                alt=""
              />
            </div>
            <h1 className="text-2xl font-bold my-3 mx-2">Hello</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PlacesSlider;
