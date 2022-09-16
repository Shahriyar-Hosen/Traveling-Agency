import React from "react";
import Content from "../theme/Content";

const LoveGoing = () => {
  return (
    <div
      className="hero bg-cover relative h-[80vh] "
      style={{
        backgroundImage: "url(https://i.ibb.co/PF7SRHR/section-bg1.png)",
      }}
    >
      <div className="bg-white bg-opacity-40 py-[22vh] w-full">
        <figure className="absolute bottom-0 h-fit w-fit ">
          <img
            className="w-full"
            src="https://i.ibb.co/nqXpPyP/shape6.png"
            alt=""
          />
        </figure>
        <div className="w-3/4 mx-auto">
          <Content className="flex justify-center items-center flex-col gap-8">
            <h5 className="font-serif text-secondary font-semibold text-lg md:text-xl mt-16">
              Love Where Your're Going
            </h5>
            <h1 className="font-serif text-3xl md:text-5xl text-secondary md:max-w-4xl text-center">
              <span className="text-black hover:text-primary ">
                Explore Your Life,
              </span>
              Travel Where You Want!
            </h1>
            <p className="max-w-xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Content>
        </div>
      </div>
    </div>
  );
};

export default LoveGoing;
