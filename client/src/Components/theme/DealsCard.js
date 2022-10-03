import React from "react";

const DealsCard = ({ link, h1, h2, price, rating, time }) => {
  return (
    <div className="w-[400px] h-[400px] md:row-span-3 relative overflow-hidden">
      <img className="w-full h-full rounded-xl  hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000" src={link} alt={h2} />
      <div className="absolute bottom-0 pb-5 rounded-xl top-0 z-10 flex justify-between w-full px-7 py-5 items-end bg-black bg-opacity-50 font-serif">
        <div>
          <h2 className="text-xl font-semibold text-secondary">{h2}</h2>

          <h1 className="text-white text-3xl font-semibold py-2">{h1}</h1>
          <span className="flex justify-start items-center mb-8">
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-secondary"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-secondary "
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-secondary"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-secondary"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-secondary"
                defaultChecked
              />
            </div>
            <span className="px-1 text-white font-sans text-lg">
              ({rating})
            </span>
          </span>

          <div className="flex justify-center items-center gap-2 mt-5">
            <span className="text-[#fdc703] text-2xl font-bold font-sans">
              ${price}
            </span>

            <span className="text-lg text-white font-semibold">
              {" "}
              | Per person
            </span>
          </div>
        </div>

        <span className="font-bold text-lg text-white font-sans">
          {time} Tours
        </span>
      </div>
    </div>
  );
};

export default DealsCard;
