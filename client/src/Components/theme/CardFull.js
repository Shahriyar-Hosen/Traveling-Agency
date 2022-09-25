import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import PButton from "./PButton";

const CardFull = ({
  img,
  offers,
  title,
  location,
  des1,
  des2,
  price,
  ratting,
}) => {
  return (
    <div className="border rounded-lg p-5 flex lg:flex-row flex-col w-fit lg:w-full justify-between items-center min-w-full">
      <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-start  gap-5">
        <figure className="w-96 h-56">
          <img
            className="w-full h-full image-full rounded-lg"
            src={img}
            alt={title}
          />
        </figure>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <span>{offers}</span>
            <h1 className="text-2xl font-semibold font-serif w-96 hover:text-primary">
              {title}
            </h1>
            <h3 className="text-primary font-serif font-semibold flex justify-center lg:justify-start items-center gap-1">
              <HiOutlineLocationMarker /> <span>{location}</span>
            </h3>
          </div>
          <div className="lg:mt-10">
            <p>{des1}</p>
            <p className="text-primary">{des2}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-end">
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              // defaultChecked={ratting === 0 && true}
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              
            />
          </div>
          {ratting} Reviews
        </div>
        <div className="flex flex-row lg:flex-col justify-center items-center lg:items-end gap-2">
          <span>From</span>
          <span className="lg:block font-serif text-2xl font-semibold">
            ${price}
          </span>
          <span>Per Adult</span>
        </div>
        <div>
          <PButton>View Detail</PButton>{" "}
        </div>
      </div>
    </div>
  );
};

export default CardFull;
