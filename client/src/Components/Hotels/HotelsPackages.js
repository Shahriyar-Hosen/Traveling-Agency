import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../../Assets/background/shape8.png";
import Content from "../theme/Content";
import PButton from "../theme/PButton";
import HotelsPackagesSlider from "./HotelsPackagesSlider";
import TopHotels from "./TopHotels";

const HotelsPackages = () => {
  return (
    <div className="min-h-screen ">
      <figure>
        <img className="-mt-5 hidden md:block" src={bgImg} alt="" />
      </figure>
      <Content>
        <div className="flex justify-center items-center flex-col gap-5 mt-12 text-center w-3/4 mx-auto">
          <h5 className="font-serif text-secondary font-semibold text-lg mt-16 md:-mt-28">
            Top Pick
          </h5>
          <h1 className="font-serif text-3xl md:text-4xl text-primary ">
            <span className="text-neutral">Best</span> Hotels Packages
          </h1>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="mt-16">
          <HotelsPackagesSlider />
        </div>
        <Link to="/hotels" className="flex justify-center">
          <PButton className="mb-5">View All Hotels</PButton>
        </Link>
      </Content>
      <TopHotels />
      <figure>
        <img
          className="rotate-180 max-h-40 w-full"
          src={bgImg}
          alt=""
        />
      </figure>
    </div>
  );
};

export default HotelsPackages;
