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
            <div className="my-10">
              <h1 className="text-2xl font-semibold font-serif">Description</h1>
              <p className="mt-5">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.Lorem ipsum, or
                lipsum as it is sometimes known, is dummy text used in laying
                out print, graphic or web designs.{" "}
              </p>
              <p className="mt-2">
                The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of Cicero's De
                Finibus Bonorum et Malorum for use in a type specimen book.
              </p>
              <div className="flex gap-5 my-10 justify-start items-center flex-wrap">
                <div className="bg-gray-200 w-fit rounded-lg p-5">
                  <h1 className="text-xl font-serif font-semibold text-black">
                    Price Includes
                  </h1>
                  <ul>
                    <li> Air Fares</li>
                    <li> 3 Nights Hotel Accomodation</li>
                    <li> Tour Guide</li>
                    <li>Entrance Fees</li>
                  </ul>
                </div>
                <div className="bg-gray-200 w-fit rounded-xl font-serif p-5">
                  <h1 className="text-lg font-semibold text-black">
                    Departure & Return Location
                  </h1>
                  <ul>
                    <li>Guide Service Fee</li>
                    <li>Driver Service Fee</li>
                    <li>Any Private Expenses</li>
                    <li>Room Service Fees</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="my-10">
              <h1 className="text-2xl font-semibold font-serif pb-3">
                Gallery
              </h1>
              <div className="flex md:flex-row flex-col justify-start items-center gap-5">
                <figure className="w-full">
                  <img
                    className="rounded-lg w-full max-w-"
                    src="https://i.ibb.co/7WJ1gFL/trending6.jpg
"
                    alt=""
                  />
                </figure>
                <figure className=" w-full">
                  <img
                    className="rounded-lg max-w-"
                    src="https://i.ibb.co/4SSgYqW/trending5.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default Destination;
