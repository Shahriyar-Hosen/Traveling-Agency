import React from "react";
import banner from "../../Assets/banner/banner-1.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-[75vh] "
      style={{ background: `url(${banner})`, backgroundSize: "cover" }}
    >
      <div className="hero-overlay bg-opacity-25"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-3xl flex flex-col gap-10 md:gap-16 justify-center items-center">
          <h1 className="mb-12 md:text-7xl text-3xl font-bold">
            LOVE & Travel
          </h1>
          <p className="mb-5 text-lg md:text-xl">
            The journey of a thousand miles begins with a single step.
            Adventures are the best way to learn. Dare to live the life you've
            always wanted.
          </p>
          <button className="btn btn-primary ">Choose Place</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
