import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="my-10">
      {/* <h1 className="text-2xl font-semibold font-serif pb-3">Gallery</h1> */}
      <div className="flex md:flex-row flex-col flex-wrap lg:flex-nowrap justify-center items-center gap-5">
        {images?.map((img, i) => (
          <figure key={i}>
            <img className="rounded-lg w-96 h-80" src={img} alt="" />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
