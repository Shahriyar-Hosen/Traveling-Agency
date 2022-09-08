import React from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import bgImg from "../../Assets/background/shape8.png";

const TourPackages = () => {
  return (
    <div
      className="min-h-screen my-10"
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between items-center gap-3">
        <div className="max-w-xl flex flex-col justify-start items-start gap-5">
          <span className="text-md font-serif font-bold text-secondary">
            Top Pick
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif">
            Best Tour Packages
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="btn text-black bg-white border-none hover:btn-primary hover:text-white">
            <MdArrowBackIosNew />
          </button>
          <button className="btn text-black bg-white border-none hover:btn-primary hover:text-white">
            <MdArrowForwardIos />
          </button>{" "}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TourPackages;
