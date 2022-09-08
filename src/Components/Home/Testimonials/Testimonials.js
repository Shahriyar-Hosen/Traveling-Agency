import React from "react";
import { FaQuoteLeft, FaRegCalendarAlt } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="my-10">
      <div
        className="hero bg-cover"
        style={{
          backgroundImage: "url(https://i.ibb.co/6bMmXfm/bg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-25"></div>
        <div className="hero-content  text-neutral-content  py-14">
          <div className="flex flex-col lg:flex-row lg:px-12 px-5 my-10 gap-5">
            {/* Header */}
            <div className="w-full lg:w-7/12 flex flex-col justify-start items-start gap-5">
              <span className="text-2xl font-serif font-bold text-secondary">
                Our Testimonails
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
                Good Reviews By <br />{" "}
                <span className="text-primary">Clients</span>
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            {/* testimonial section */}
            <div className="w-full lg:w-8/12 ">
              <p className="text-white text-lg flex justify-start gap-2">
                <span className="text-primary text-3xl">
                  <FaQuoteLeft />
                </span>
                <i className="text-xl">
                  Lorem Ipsum is simply dummy text of the printing andypesetting
                  industry. Lorem ipsum a simple Lorem Ipsum has been the
                  industry's standard dummy hic et quidem. Dignissimos maxime
                  velit unde inventore quasi vero dolorem.
                </i>
              </p>
              <div className="flex justify-center lg:justify-start items-center gap-5 py-10 ">
                <div className="avatar lg:ml-7">
                  <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div>
                  <h5 className="text-secondary font-serif text-xl font-bold">
                    Kelton Mick
                  </h5>
                  <span className="text-white text-md font-semibold">
                    Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial card */}
      <div className="card lg:card-side bg-base-100 shadow-xl lg:w-[650px]">
        <figure>
          <img
            className="lg:max-w-[300px] w-full h-[300px] lg:h-full"
            src="https://placeimg.com/400/400/arch"
            alt="Album"
          />
        </figure>
        <div className="card-body text-start">
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
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-secondary"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-secondary"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-secondary"
                checked
              />
            </div>
            <span className="px-1">(38)</span>
          </span>
          <p className="text-base pt-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum
          </p>
          <p className="text-primary font-semibold flex justify-start items-center gap-2">
            <FaRegCalendarAlt /> 9 Days Tours
          </p>
          <div className="card-actions justify-start border-t pt-3">
            <div className="flex justify-center items-center gap-2">
              <span className="text-primary text-xl font-bold">$180.00</span>

              <span className="text-lg text-gray-500 font-semibold">
                {" "}
                | Per person
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
