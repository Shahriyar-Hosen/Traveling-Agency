import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Content from "../theme/Content";
import Header from "../theme/Header";

const Tour = () => {
  return (
    <section>
      {/* Full width lists */}
      <Header h1="Tour single" page="Tour Single Three" />
      <Content>
        <div>
          {/* Header */}
          <div className="flex flex-col justify-center items-center gap-3 my-3 pb-5 border-b">
            <h1 className="text-4xl font-semibold font-serif text-black">
              Adriatic Adventure-Zagreb To Athens
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
          {/* Gallery */}
          <div className="my-10">
            {/* <h1 className="text-2xl font-semibold font-serif pb-3">Gallery</h1> */}
            <div className="flex md:flex-row flex-col flex-wrap lg:flex-nowrap justify-center items-center gap-5 px-3">
              <figure className="w-full">
                <img
                  className="rounded-lg w-full max-w-"
                  src="https://i.ibb.co/r77YXNS/trending1.jpg"
                  alt=""
                />
              </figure>
              <figure className=" w-full">
                <img
                  className="rounded-lg w-full"
                  src="https://i.ibb.co/zGzhCkz/trending2.jpg"
                  alt=""
                />
              </figure>
              <figure className=" w-full">
                <img
                  className="rounded-lg w-full"
                  src="https://i.ibb.co/jrGj182/trending3.jpg"
                  alt=""
                />
              </figure>
            </div>
          </div>
          {/* Description */}
          <div className="my-10">
            <h1 className="text-2xl font-semibold font-serif">Description</h1>
            <p className="mt-5">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.Lorem ipsum, or lipsum as
              it is sometimes known, is dummy text used in laying out print,
              graphic or web designs.{" "}
            </p>
            <p className="mt-2">
              The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De
              Finibus Bonorum et Malorum for use in a type specimen book.
            </p>
            {/* offers table */}
            <div className="grid grid-cols-3 px-5 my-5">
              <p className="border border-b-0 px-3 py-2 font-semibold text-gray-600">
                {" "}
                5 Days
              </p>
              <p className="border border-b-0 px-3 py-2 font-semibold text-gray-600">
                {" "}
                Max People : 26
              </p>
              <p className="border border-b-0 px-3 py-2 font-semibold text-gray-600">
                {" "}
                Jan 18 - Dec 21
              </p>
              <p className="border px-3 py-2 font-semibold text-gray-600">
                {" "}
                Min Age : 10+
              </p>
              <p className="border px-3 py-2 font-semibold text-gray-600">
                {" "}
                Pickup : Airport
              </p>
              <p className="border px-3 py-2 font-semibold text-gray-600">
                {" "}
                Language - English, Thai
              </p>
            </div>
            {/* packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 px-3">
              <div className="bg-gray-100 w-full rounded-lg p-5">
                <h1 className="text-xl font-serif font-semibold text-black">
                  Departure & Return Location
                </h1>
                <ul>
                  <li>John F.K. International Airport(Google Map)</li>
                </ul>
              </div>
              <div className="bg-gray-100 w-full rounded-xl font-serif p-5">
                <h1 className="text-lg font-semibold text-black">Bedroom</h1>
                <ul>
                  <li>4 Bedrooms</li>
                </ul>
              </div>
              <div className="bg-gray-100 w-full rounded-lg p-5">
                <h1 className="text-xl font-serif font-semibold text-black">
                  Departure Time
                </h1>
                <ul>
                  <li>3 Hours Before Flight Time</li>
                </ul>
              </div>
              <div className="bg-gray-100 w-full rounded-xl font-serif p-5">
                <h1 className="text-lg font-semibold text-black">
                  Departure Time
                </h1>
                <ul>
                  <li>3 Hours Before Flight Time</li>
                </ul>
              </div>
              <div className="bg-gray-100 w-full rounded-lg p-5">
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
              <div className="bg-gray-100 w-full rounded-xl font-serif p-5">
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
          {/* What To Expect */}
          <div className="my-10">
            <h1 className="text-2xl font-semibold font-serif">
              What To Expect
            </h1>
            <p className="mt-5">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.Lorem ipsum, or lipsum as
              it is sometimes known, is dummy text used in laying out print,
              graphic or web designs.{" "}
            </p>
            <p className="mt-2">
              The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De
              Finibus Bonorum et Malorum for use in a type specimen book.
            </p>
          </div>
          {/* Collapse */}
          <div className="my-10 px-3">
            <div tabIndex={0} className="collapse collapse-arrow bg-base-100">
              <input type="checkbox" />
              {/* checked bg-primary text-white */}
              <div className="collapse-title text-xl font-medium border rounded-lg">
                Day 1 - Barcelona - Zaragoza - Madrid
              </div>
              <div className="collapse-content pt-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, inventore cumque veniam, praesentium velit incidunt rem
                  quas a, quos eos ipsum, reprehenderit voluptatem.
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow bg-base-100 ">
              <input type="checkbox" />
              {/* checked bg-primary text-white */}
              <div className="collapse-title text-xl font-medium border rounded-lg">
                Day 2 - Zurich - Biel/Bienne - Neuchatel - Geneva
              </div>
              <div className="collapse-content pt-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, inventore cumque veniam, praesentium velit incidunt rem
                  quas a, quos eos ipsum, reprehenderit voluptatem.
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow bg-base-100 ">
              <input type="checkbox" />
              {/* checked bg-primary text-white */}
              <div className="collapse-title text-xl font-medium border rounded-lg">
                Day 3 - Enchanting Engelberg
              </div>
              <div className="collapse-content pt-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, inventore cumque veniam, praesentium velit incidunt rem
                  quas a, quos eos ipsum, reprehenderit voluptatem.
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow bg-base-100 ">
              <input type="checkbox" />
              {/* checked bg-primary text-white */}
              <div className="collapse-title text-xl font-medium border rounded-lg">
                Day 4 - Barcelona - Zaragoza - Madrid
              </div>
              <div className="collapse-content pt-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, inventore cumque veniam, praesentium velit incidunt rem
                  quas a, quos eos ipsum, reprehenderit voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Tour;
