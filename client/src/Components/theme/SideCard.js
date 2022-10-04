import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const SideCard = ({ img, h2, h1, rating, details, time, price, offers }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-5/6 lg:w-full">
      {" "}
      <figure className="relative w-full lg:w-[350px] overflow-hidden">
        <img
          className="lg:max-w-[300px] w-full h-[300px] lg:h-full  hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000"
          src={img}
          alt={h2}
        />
      </figure>
      <div className="card-body text-start">
        <span className="absolute top-14 -left-20 font-bold bg-secondary px-20 py-2 text-xl text-white -rotate-45">
          <span className="pl-8">{offers}% OFF</span>
        </span>
        <h2 className="text-primary text-lg  font-serif font-semibold ">
          {h2}
        </h2>
        <h1 className="text-2xl font-serif font-semibold hover:text-primary">
          {h1}
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
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
              defaultChecked
            />
          </div>
          <span className="px-1">({rating})</span>
        </span>
        <p className="text-base pt-2">{details}</p>
        <p className="text-primary font-semibold flex justify-start items-center gap-2">
          <FaRegCalendarAlt /> {time} Tours
        </p>
        <div className="card-actions justify-start border-t pt-3">
          <div className="flex justify-center items-center gap-2">
            <span className="text-primary text-xl font-bold">${price}</span>

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
