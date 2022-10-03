import React from "react";

const GuidesCard = ({ img, h1, h2 }) => {
  return (
    <div className="w-72 mx-auto">
      <figure className="overflow-hidden rounded-t-xl">
        <img className="rounded-t-xl  hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000" src={img} alt="tour guides" />
      </figure>
      <div className="bg-primary w-full text-white text-center p-5 rounded-b-xl">
        <h1 className="text-2xl font-serif font-semibold">{h1}</h1>
        <h2 className="text-lg font-semibold">{h2}</h2>
      </div>
    </div>
  );
};

export default GuidesCard;
