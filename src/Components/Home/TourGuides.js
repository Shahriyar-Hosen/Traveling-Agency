import React from "react";
import GuidesCard from "../theme/GuidesCard";

const TourGuides = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-5  text-center w-3/4 mx-auto ">
        <h5 className="font-serif text-secondary font-semibold text-lg mt-16">
          Tour Guides
        </h5>
        <h1 className="font-serif text-3xl md:text-4xl text-primary ">
          <span className="text-neutral">Meet Our </span> Excellent Guides
        </h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        <GuidesCard
          img="https://i.ibb.co/YL0kPL6/img2.jpg"
          h1="Horke Pels"
          h2="Head Officer"
        />
        <GuidesCard
          img="https://i.ibb.co/wBCSmQt/img4.jpg"
          h1="Solden kalos"
          h2="Supervisor"
        />
        <GuidesCard
          img="https://i.ibb.co/NLzw5nj/img1.jpg"
          h1="Salmon Thuir"
          h2="Senior Agent"
        />
        <GuidesCard
          img="https://i.ibb.co/1zqw8kb/img3.jpg"
          h1="Nelson Bam"
          h2="Quality Assurance"
        />
      </div>
    </div>
  );
};

export default TourGuides;
