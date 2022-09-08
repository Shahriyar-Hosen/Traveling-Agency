import React from "react";
import BlogCard from "../../theme/BlogCard";

const Blogs = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-5  text-center w-3/4 mx-auto ">
        <h5 className="font-serif text-secondary font-semibold text-lg mt-16">
          Our Blogs Offers
        </h5>
        <h1 className="font-serif text-3xl md:text-4xl text-primary ">
          <span className="text-neutral">Recent </span> Articles & Posts
        </h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <BlogCard
          img="https://i.ibb.co/BTdpjT4/trending10.jpg"
          h1="Technology"
          p="How A Developer Duo At Deutsche Bank Keep Remote Alive."
        />
        <BlogCard
          img="https://i.ibb.co/tYGmTcM/trending12.jpg"
          h1="Inspiration"
          p="Inspire Runner With Autism Graces Of Women's Running"
        />
        <BlogCard
          img="https://i.ibb.co/p1HMyQd/trending13.jpg"
          h1="Public"
          p="Services To Grow Your Business Sell Affiliate Products"
        />
      </div>
    </div>
  );
};

export default Blogs;
