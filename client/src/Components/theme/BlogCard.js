import React from "react";

const BlogCard = ({ img, h1, p }) => {
  return (
    <div className="w-96 mx-auto shadow rounded-xl">
      <figure className="rounded-t-xl overflow-hidden">
        <img
          className="rounded-t-xl  hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000"
          src={img}
          alt=""
        />
      </figure>
      <div className="rounded-b-xl px-5 py-6">
        <h1 className="text-lg text-primary font-bold font-serif">{h1}</h1>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default BlogCard;
