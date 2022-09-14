import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import LoveGoing from "../Shared/LoveGoing";
import Partners from "../Shared/Partners";
import Content from "../theme/Content";
import Header from "../theme/Header";

const Tour = () => {
  return (
    <section>
      {/* Full width Tour page */}
      <Header h1="Tour single" page="Tour Single Three" />
      <Content className="px-3">
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
          <div className="flex md:flex-row flex-col flex-wrap lg:flex-nowrap justify-center items-center gap-5">
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
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it
            is sometimes known, is dummy text used in laying out print, graphic
            or web designs.{" "}
          </p>
          <p className="mt-2">
            The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Cicero's De
            Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          {/* offers table */}
          <div className="grid grid-cols-3 my-5">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
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
          <h1 className="text-2xl font-semibold font-serif">What To Expect</h1>
          <p className="mt-5">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it
            is sometimes known, is dummy text used in laying out print, graphic
            or web designs.{" "}
          </p>
          <p className="mt-2">
            The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Cicero's De
            Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
        </div>
        {/* Collapse */}
        <div className="my-10 ">
          <div tabIndex={0} className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            {/* checked bg-primary text-white */}
            <div className="collapse-title text-xl font-medium border rounded-lg">
              Day 1 - Barcelona - Zaragoza - Madrid
            </div>
            <div className="collapse-content pt-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                inventore cumque veniam, praesentium velit incidunt rem quas a,
                quos eos ipsum, reprehenderit voluptatem.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                inventore cumque veniam, praesentium velit incidunt rem quas a,
                quos eos ipsum, reprehenderit voluptatem.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                inventore cumque veniam, praesentium velit incidunt rem quas a,
                quos eos ipsum, reprehenderit voluptatem.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                inventore cumque veniam, praesentium velit incidunt rem quas a,
                quos eos ipsum, reprehenderit voluptatem.
              </p>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="my-10">
          <h1 className="text-2xl font-semibold font-serif pb-3">Map</h1>
          <div class="map rounded overflow-hidden">
            <div className="w-full">
              <iframe
                className=" rounded overflow-hidden w-full"
                height="400"
                title="google maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.05517529047!2d90.27575512876744!3d23.780727221499042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa723bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1662898823726!5m2!1sen!2sus"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-start items-center gap-5"></div>
        </div>
        {/* Average Reviews */}
        <div className="my-10">
          <h1 className="text-2xl font-semibold font-serif pb-3">
            Average Reviews
          </h1>
          <div className=" flex flex-col md:flex-row gap-10">
            <div className="md:w- bg-[#17233e] text-white p-8 rounded-lg  text-center flex flex-col gap-4">
              <span className="text-5xl font-serif">2.2/5</span>{" "}
              <p>
                <q className="text-xl font-serif">
                  Feel So Much Worst Than Thinking
                </q>{" "}
              </p>
              <span>From 40 Reviews</span>
            </div>
            <div className="flex flex-col gap-1 justify-center w-full mr-10">
              <span className="text-lg font-semibold">
                <h1>Cleanliness</h1>
                <progress
                  className="progress progress-primary w-full"
                  value="45"
                  max="100"
                ></progress>
              </span>
              <span className="text-lg font-semibold">
                <h1>Facilities</h1>
                <progress
                  className="progress progress-primary w-full"
                  value="40"
                  max="100"
                ></progress>
              </span>
              <span className="text-lg font-semibold">
                <h1>Value for money</h1>
                <progress
                  className="progress progress-primary w-full"
                  value="30"
                  max="100"
                ></progress>
              </span>
              <span className="text-lg font-semibold">
                <h1>Service</h1>
                <progress
                  className="progress progress-primary w-full"
                  value="45"
                  max="100"
                ></progress>
              </span>
              <span className="text-lg font-semibold">
                <h1>Location</h1>
                <progress
                  className="progress progress-primary w-full"
                  value="20"
                  max="100"
                ></progress>
              </span>
            </div>
          </div>
        </div>
        {/* Write A Review */}
        <div className="my-10">
          <h1 className="text-2xl font-semibold font-serif pb-3">
            Write A Review
          </h1>
          <form className="w-full flex flex-col gap-5">
            <span className="flex flex-col sm:flex-row gap-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-full"
              />
            </span>
            <textarea
              className="textarea textarea-bordered w-full h-28"
              placeholder="Comment"
            ></textarea>
          </form>
        </div>
      </Content>
      <LoveGoing />
      <Partners />
    </section>
  );
};

export default Tour;
