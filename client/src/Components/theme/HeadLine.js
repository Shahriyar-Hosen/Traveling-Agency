import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const HeadLine = ({ title, location, ratting }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-3 my-3 pb-5 border-b">
      <h1 className="text-4xl font-semibold font-serif text-black">{title}</h1>
      <p className="flex justify-start items-center gap-2">
        <HiOutlineLocationMarker />
        {location}
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
        </div>
        <span>({ratting} Reviews)</span>
      </p>
    </section>
  );
};

export default HeadLine;
