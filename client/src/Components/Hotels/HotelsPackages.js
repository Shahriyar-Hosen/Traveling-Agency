import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import bgImg from "../../Assets/background/shape8.png";
import Content from "../theme/Content";
import HotelsPackagesSlider from "./HotelsPackagesSlider";
import TopHotels from "./TopHotels";

const HotelsPackages = () => {
  return (
    <div className="min-h-screen ">
    <figure>
      <img className="-mt-5" src={bgImg} alt="" />
    </figure>
      <Content>
        <div className="flex justify-between items-center gap-3">
          <div className="max-w-xl flex flex-col justify-start items-start gap-5 mx-5">
            <span className="text-md font-serif font-bold text-secondary">
              Top Pick
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif">
              Best Hotels Packages
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <button className="btn text-black bg-gray-100 border-none hover:btn-primary hover:text-white">
              <MdArrowBackIosNew />
            </button>
            <button className="btn text-black bg-gray-100 border-none hover:btn-primary hover:text-white">
              <MdArrowForwardIos />
            </button>{" "}
          </div>
        </div>
        <div className="mt-16">
          <HotelsPackagesSlider />
        </div>
      </Content>
      <TopHotels />
      <figure>
        <img className="rotate-180 -mt-48" src={bgImg} alt="" />
      </figure>
    </div>
  );
};

export default HotelsPackages;
