import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="card w-96">
            <figure class="px-10 pt-10">
              <img
                src="https://i.ibb.co/6nzRM80/product.png"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>hello world</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card w-96">
            <figure class="px-10 pt-10">
              <img
                src="https://i.ibb.co/6nzRM80/product.png"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>hello world</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card w-96">
            <figure class="px-10 pt-10">
              <img
                src="https://i.ibb.co/6nzRM80/product.png"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>hello world</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card w-96">
            <figure class="px-10 pt-10">
              <img
                src="https://i.ibb.co/6nzRM80/product.png"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>hello world</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card w-96">
            <figure class="px-10 pt-10">
              <img
                src="https://i.ibb.co/6nzRM80/product.png"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>hello world</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card w-96">
            <figure class="px-10 pt-10">
              <img
                src="https://i.ibb.co/6nzRM80/product.png"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>hello world</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card w-96">
            <figure class="px-10 pt-10">
              <img
                src="https://i.ibb.co/6nzRM80/product.png"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>hello world</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card w-96">
            <figure class="px-10 pt-10">
              <img
                src="https://i.ibb.co/6nzRM80/product.png"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>hello world</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card w-96">
            <figure class="px-10 pt-10">
              <img
                src="https://i.ibb.co/6nzRM80/product.png"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>hello world</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
