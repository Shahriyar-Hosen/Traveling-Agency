import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const SideCard = ({ img, h2, h1, rating, details, time, price, offers }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:w-[650px]">
      <figure className="relative">
        <span className="absolute top-14 -left-24 font-bold bg-secondary px-24 py-3 text-xl text-white -rotate-45">
          <span className="pl-8">10% OFF</span>
        </span>
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
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
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
  );
};

export default SideCard;
