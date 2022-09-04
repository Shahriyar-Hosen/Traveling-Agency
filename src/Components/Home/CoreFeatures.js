import React from "react";
import bgShape from "../../Assets/background/shape4.png";
import { BsFlag } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { BiDirections } from "react-icons/bi";
import { AiOutlineCompass } from "react-icons/ai";

const CoreFeatures = () => {
  return (
    <div
      style={{ background: `url(${bgShape})`, backgroundSize: "cover" }}
      className="mt-10"
    >
      <div className="flex justify-center items-center flex-col gap-5  text-center w-3/4 mx-auto">
        <h5 className="font-serif text-secondary font-semibold text-lg mt-16">
          Core Features
        </h5>
        <h1 className="font-serif text-3xl md:text-4xl text-primary ">
          <span className="text-neutral">Find</span> Travel Perfection
        </h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* cards */}
      <div className="w-full pt-10 mx-5 flex justify-center items-center flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center">
        <div className="w-72 bg-white p-9 rounded-lg flex flex-col gap-5 border border-gray-300">
          <div>
            <BsFlag className="text-primary text-7xl" />{" "}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-black text-xl font-serif font-semibold">
              Tell Us What You want To Do
            </h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia.
            </p>
            <p className="text-primary">100+ Reviews</p>
          </div>
        </div>

        <div className="w-72 bg-white p-9 rounded-lg flex flex-col gap-5 border  border-gray-300">
          <div>
            <VscLocation className="text-primary text-7xl" />{" "}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-black text-xl font-serif font-semibold">
              Share Your Travel Locations
            </h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia.
            </p>
            <p className="text-primary">100+ Reviews</p>
          </div>
        </div>

        <div className="w-72 bg-white p-9 rounded-lg flex flex-col gap-5 border  border-gray-300">
          <div>
            <BiDirections className="text-primary text-7xl" />{" "}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-black text-xl font-serif font-semibold">
              Share Your Travel Preference
            </h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia.
            </p>
            <p className="text-primary">100+ Reviews</p>
          </div>
        </div>

        <div className="w-72 bg-white p-9 rounded-lg flex flex-col gap-5 border  border-gray-300">
          <div>
            <AiOutlineCompass className="text-primary text-7xl" />{" "}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-black text-xl font-serif font-semibold">
              Here 100% Trusted Tour Agency
            </h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia.
            </p>
            <p className="text-primary">100+ Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
