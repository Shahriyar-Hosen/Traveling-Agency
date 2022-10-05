import React from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";

const TourPackagesSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
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
      <SwiperSlide className="pb-14">
        <Link to="/tours/1">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="overflow-hidden">
              <img
                className="hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000"
                src="https://i.ibb.co/jrGj182/trending3.jpg"
                alt="Package"
              />
            </figure>
            <div className="card-body text-start relative">
              <span className="absolute -top-7 right-5 btn text-white btn-primary -mb-5 z-10">
                9 Days Tours
              </span>
              <h2 className="text-primary text-lg  font-serif font-semibold ">
                Greece
              </h2>
              <h1 className="text-2xl font-serif font-semibold hover:text-primary">
                Santorini, Oia
              </h1>
              <span className="flex justify-start items-center">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary "
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                </div>
                <span className="px-1">(38)</span>
              </span>
              <p className="text-base py-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum
              </p>
              <div className="card-actions justify-start border-t pt-3">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-primary text-xl font-bold">
                    $180.00
                  </span>

                  <span className="text-lg text-gray-500 font-semibold">
                    {" "}
                    | Per person
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="pb-14">
        <Link to="/tours/1">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="overflow-hidden">
              <img
                className="hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000"
                src="https://i.ibb.co/SX8f26w/trending4.jpg"
                alt="Package"
              />
            </figure>
            <div className="card-body text-start relative">
              <span className="absolute -top-7 right-5 btn text-white btn-primary -mb-5 z-10">
                9 Days Tours
              </span>
              <h2 className="text-primary text-lg  font-serif font-semibold ">
                Maldives
              </h2>
              <h1 className="text-2xl font-serif font-semibold hover:text-primary">
                Hurawalhi Island
              </h1>
              <span className="flex justify-start items-center">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary "
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                </div>
                <span className="px-1">(18)</span>
              </span>
              <p className="text-base py-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum
              </p>
              <div className="card-actions justify-start border-t pt-3">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-primary text-xl font-bold">
                    $260.00
                  </span>

                  <span className="text-lg text-gray-500 font-semibold">
                    {" "}
                    | Per person
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="pb-14">
        <Link to="/tours/1">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="overflow-hidden">
              <img
                className="hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000"
                src="https://i.ibb.co/vsf7WRX/trending1.jpg"
                alt="Package"
              />
            </figure>
            <div className="card-body text-start relative">
              <span className="absolute -top-7 right-5 btn text-white btn-primary -mb-5 z-10">
                5 Days Tours
              </span>
              <h2 className="text-primary text-lg  font-serif font-semibold ">
                Greece
              </h2>
              <h1 className="text-2xl font-serif font-semibold hover:text-primary">
                Santorini, Oia
              </h1>
              <span className="flex justify-start items-center">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary "
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                </div>
                <span className="px-1">(38)</span>
              </span>
              <p className="text-base py-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum
              </p>
              <div className="card-actions justify-start border-t pt-3">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-primary text-xl font-bold">
                    $120.00
                  </span>

                  <span className="text-lg text-gray-500 font-semibold">
                    {" "}
                    | Per person
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="pb-14">
        <Link to="/tours/1">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="overflow-hidden">
              <img
                className="hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000"
                src="https://i.ibb.co/zGzhCkz/trending2.jpg"
                alt="Package"
              />
            </figure>
            <div className="card-body text-start relative">
              <span className="absolute -top-7 right-5 btn text-white btn-primary -mb-5 z-10">
                9 Days Tours
              </span>
              <h2 className="text-primary text-lg  font-serif font-semibold ">
                Croatia
              </h2>
              <h1 className="text-2xl font-serif font-semibold hover:text-primary">
                Piazza Castello
              </h1>
              <span className="flex justify-start items-center">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary "
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-secondary"
                    defaultChecked
                  />
                </div>
                <span className="px-1">(12)</span>
              </span>
              <p className="text-base py-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum
              </p>
              <div className="card-actions justify-start border-t pt-3">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-primary text-xl font-bold">
                    $170.00
                  </span>

                  <span className="text-lg text-gray-500 font-semibold">
                    {" "}
                    | Per person
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default TourPackagesSlider;
