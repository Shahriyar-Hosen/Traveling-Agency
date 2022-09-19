import React from "react";
import Content from "../../theme/Content";
import PlacesSlider from "./PlacesSlider";

const Places = () => {


  return (
    <Content className="flex flex-col gap-5 min-h-[350px] mt-20 px-5">
      <div className="flex justify-between items-center gap-3">
        <div>
          <span className="text-md text-secondary">PLAN YOUR TRIP</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Where to next?
          </h2>
        </div>
        <button className="py-1 mt-5 px-6 font-bold rounded-full border-spacing-1 border border-primary hidden md:flex">
          View all Places
        </button>
      </div>
      <div className="my-5">
        {/* slider */}
        <PlacesSlider />
      </div>
      <div className="w-48 mx-auto">
        <button className="py-1 mt-5 px-6 font-bold rounded-full border-spacing-1 border border-primary md:hidden">
          View all Places
        </button>
      </div>
    </Content>
  );
};

export default Places;
