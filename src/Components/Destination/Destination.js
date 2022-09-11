import React from "react";
import Content from "../theme/Content";
import Header from "./Header";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Destination = () => {
  return (
    <div>
      <Header h1="Bangkok - Thailand" page="Destination Detail" />
      <div className="mx-3">
        <Content>
          <div>
            {/* Header */}
            <div className="flex flex-col gap-3 my-3 pb-3 border-b">
              <h1 className="text-4xl font-semibold font-serif text-black">
                Bangkok Thailand
              </h1>
              <p className="flex justify-start items-center gap-2">
                <HiOutlineLocationMarker /> Greater London, United Kingdom
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
                <span>(1,186 Reviews)</span>
              </p>
            </div>
            <figure className="">
              <img
                className="w-full rounded-lg"
                src="https://i.ibb.co/T4HDNQy/trending-large.jpg"
                alt=""
              />
            </figure>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default Destination;
