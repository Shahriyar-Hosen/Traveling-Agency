import React from "react";
import PlacesSlider from "../theme/PlacesSlider";

const Places = () => {
  /* 
    https://i.ibb.co/sRMwdrN/cox-s-bazar.jpg
    https://i.ibb.co/SV5RJhP/dubai.jpg
    https://i.ibb.co/FJz4sxT/istanbul.jpg
    https://i.ibb.co/WsdhSsF/maldives.jpg
    https://i.ibb.co/WsrVvYH/agra.jpg
    https://i.ibb.co/2nsH6L7/bankok.jpg
    https://i.ibb.co/Yd39kWY/kathmandu.jpg
    https://i.ibb.co/xGSyWmB/colombo.jpg
*/

  return (
    <div className="flex flex-col gap-5 min-h-[350px] my-16 px-5">
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
      <div className="my-10">
        {/* slider */}
        <PlacesSlider />
      </div>
      <div className="w-48 mx-auto">
        <button className="py-1 mt-5 px-6 font-bold rounded-full border-spacing-1 border border-primary md:hidden">
          View all Places
        </button>
      </div>
    </div>
  );
};

export default Places;
