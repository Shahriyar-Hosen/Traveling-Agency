import React from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import bgImg from "../../Assets/background/shape8.png";

const TourPackages = () => {
  return (
    <div
      className="min-h-screen my-10 mx-10"
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
      <div className="flex justify-center mt-24">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/jrGj182/trending3.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
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
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400 "
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
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
                <span className="text-primary text-xl font-bold">$180.00</span>

                <span className="text-lg text-gray-500 font-semibold">
                  {" "}
                  | Per person
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
