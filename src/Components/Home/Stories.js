import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import bgStories from "../../Assets/Stories.png";

const Stories = () => {
  return (
    <div className="bg-[#222222] py-24">
      <div className="w-[1150px] mx-auto grid grid-cols-3 gap-10" >
        <div>
          <p
            style={{ letterSpacing: "6px" }}
            className="text-lg text-primary uppercase mb-4"
          >
            TRAVEL STORIES AND NEWS
          </p>
          <h2 className="text-5xl mb-7 text-white">
            Explore our latest stories
          </h2>
          <p className="text-xl mb-4 text-accent">
            The best prices for your relaxing vacation. The utanislen quam
            nestibulum ac quame odion elementum sceisue the aucan.
          </p>
          <p className="text-xl mb-6 text-accent">
            Orci varius natoque penatibus et magnis disney parturient monte
            nascete ridiculus mus nellen etesque habitant morbine.
          </p>
          <div className="flex justify-start items-center">
            <FiPhoneCall className="text-4xl mr-8 text-primary" />
            <p className="text-lg text-accent">
              For information{" "}
              <p className="block text-2xl text-primary tracking-widest">
                855 100 4444
              </p>
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide className="-top-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-base-100 shadow-xl">
                  <figure>
                    <img src={"exPhoto1"} alt="" />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-3xl">Room cleaning</h2>
                    <h4 className="text-5xl text-primary my-3">
                      $50<small className="text-sm text-[#777]">/ daily</small>
                    </h4>
                    <div className="text-lg text-[#777]">
                      <p className="flex items-center gap-2 mb-2">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        Hotel ut nisan the duru
                      </p>
                      <p className="flex items-center gap-2 mb-2">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        Orci miss natoque vasa ince
                      </p>
                      <p className="flex items-center gap-2">
                        <AiOutlineClose className="text-xl text" />
                        Clean sorem ipsum morbin
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-base-100 shadow-xl">
                  <figure>
                    <img src={"exPhoto2"} alt="" />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-3xl">Room cleaning</h2>
                    <h4 className="text-5xl text-primary my-3">
                      $40<small className="text-sm text-[#777]">/ daily</small>
                    </h4>
                    <div className="text-lg text-[#777]">
                      <p className="flex items-center gap-2 mb-2">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        Hotel ut nisan the duru
                      </p>
                      <p className="flex items-center gap-2 mb-2">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        Orci miss natoque vasa ince
                      </p>
                      <p className="flex items-center gap-2">
                        <AiOutlineClose className="text-xl text" />
                        Clean sorem ipsum morbin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="-top-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-base-100 shadow-xl">
                  <figure>
                    <img src={"exPhoto3"} alt="" />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-3xl">Room cleaning</h2>
                    <h4 className="text-5xl text-primary my-3">
                      $40<small className="text-sm text-[#777]">/ daily</small>
                    </h4>
                    <div className="text-lg text-[#777]">
                      <p className="flex items-center gap-2 mb-2">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        Hotel ut nisan the duru
                      </p>
                      <p className="flex items-center gap-2 mb-2">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        Orci miss natoque vasa ince
                      </p>
                      <p className="flex items-center gap-2">
                        <AiOutlineClose className="text-xl text" />
                        Clean sorem ipsum morbin
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-base-100 shadow-xl">
                  <figure>
                    <img src={"exPhoto4"} alt="" />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-3xl">Room cleaning</h2>
                    <h4 className="text-5xl text-primary my-3">
                      $35<small className="text-sm text-[#777]">/ daily</small>
                    </h4>
                    <div className="text-lg text-[#777]">
                      <p className="flex items-center gap-2 mb-2">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        Hotel ut nisan the duru
                      </p>
                      <p className="flex items-center gap-2 mb-2">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        Orci miss natoque vasa ince
                      </p>
                      <p className="flex items-center gap-2">
                        <AiOutlineClose className="text-xl text" />
                        Clean sorem ipsum morbin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Stories;
