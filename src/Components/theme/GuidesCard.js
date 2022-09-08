import React from "react";

const GuidesCard = ({ img, h1, h2 }) => {
  return (
    <div className="mt-10 w-80 mx-auto ">
      <figure>
        <img className="rounded-t-xl" src={img} alt="tour guides" />
      </figure>
      <div className="bg-primary w-full text-white text-center p-5 rounded-b-xl">
        <h1 className="text-2xl font-serif font-semibold">{h1}</h1>
        <h2 className="text-lg font-semibold">{h2}</h2>
      </div>
    </div>
  );
};

export default GuidesCard;
