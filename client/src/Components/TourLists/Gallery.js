import React from "react";

const Gallery = () => {
  return (
    <div className="my-10">
      {/* <h1 className="text-2xl font-semibold font-serif pb-3">Gallery</h1> */}
      <div className="flex md:flex-row flex-col flex-wrap lg:flex-nowrap justify-center items-center gap-5">
        <figure className="w-full">
          <img
            className="rounded-lg w-full max-w-"
            src="https://i.ibb.co/r77YXNS/trending1.jpg"
            alt=""
          />
        </figure>
        <figure className=" w-full">
          <img
            className="rounded-lg w-full"
            src="https://i.ibb.co/zGzhCkz/trending2.jpg"
            alt=""
          />
        </figure>
        <figure className=" w-full">
          <img
            className="rounded-lg w-full"
            src="https://i.ibb.co/jrGj182/trending3.jpg"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};

export default Gallery;
