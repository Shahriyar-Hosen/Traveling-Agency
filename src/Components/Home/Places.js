import React from "react";

const Places = () => {
  return (
    <div className="flex flex-col gap-5 min-h-fit my-16 px-10">
      <div className="flex justify-between items-center gap-3">
        <div>
          <span className="text-md">PLAN YOUR TRIP</span>
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Where to next?
          </h2>
        </div>
        <button className="py-1 mt-5 px-6 font-bold rounded-full border-spacing-1 border border-primary hidden md:flex">
          View all Places
        </button>
      </div>
      <div>{/* slider */}</div>
      <div className="w-48 mx-auto">
        <button className="py-1 mt-5 px-6 font-bold rounded-full border-spacing-1 border border-primary md:hidden">
          View all Places
        </button>
      </div>
    </div>
  );
};

export default Places;
