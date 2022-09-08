import React from "react";
import GuidesCard from "../theme/GuidesCard";

const TourGuides = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-5  text-center w-3/4 mx-auto ">
        <h5 className="font-serif text-secondary font-semibold text-lg mt-16">
          Our Blogs Offers
        </h5>
        <h1 className="font-serif text-3xl md:text-4xl text-primary ">
          <span className="text-neutral">Recent </span> Articles & Posts
        </h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* cards */}
      <GuidesCard
        img="https://i.ibb.co/YL0kPL6/img2.jpg"
        h1="Horke Pels"
        h2="Head Officer"
      />
    </div>
  );
};

export default TourGuides;
