import React from "react";

const DestinationCard = ({ img, country, place, time }) => {
  return (
    <div className="md:w-80 md:h-80 xl:w-96 xl:h-96 relative">
      <img
        className="w-full h-full rounded-xl transform transition duration-500 hover:scale-125"
        src={img}
        alt={place}
      />
      <div className="absolute bottom-0 pb-5 rounded-xl top-0 z-10 flex justify-between w-full px-10 py-5 items-end bg-gray-900 bg-opacity-20 font-serif">
        <div>
          <h1 className="text-xl font-semibold text-secondary">{place}</h1>
          <p className="text-white text-2xl font-semibold">{country}</p>
        </div>
        <button className="btn btn-sm text-md text-white btn-primary font-sans">
          {time}
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
