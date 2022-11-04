import React from "react";
import { Link } from "react-router-dom";
import Content from "../theme/Content";
import PackagesCard from "../theme/PackagesCard";
import PButton from "../theme/PButton";

const TopHotels = () => {
  return (
    <Content className="my-10">
      <div className="flex flex-col gap-5 text-center lg:text-start px-5">
        <h5 className="font-serif text-secondary font-semibold text-lg">
          Top Hotels
        </h5>
        <h1 className="font-serif text-3xl md:text-4xl text-primary ">
          <span className="text-neutral">The Hotel </span> of This Place
        </h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* cards */}
      {/* { link, h1, h2, price, rating, time }  */}
      <div className="flex justify-center items-center gap-5 flex-col md:flex-row flex-wrap py-10 md:pb-0">
        <Link to="/hotels/1">
          <PackagesCard
            img="https://i.ibb.co/QPdvFw1/LTI.jpg"
            offers="15% OFF"
            title="Leeds Castle"
            location="Croatia"
            des="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
            price="125"
            ratting="55"
            hotel
          />
        </Link>
        <Link to="/hotels/1">
          <PackagesCard
            img="https://i.ibb.co/KsHgF2v/Luxury-Hotels.jpg"
            offers="15% OFF"
            title="Adriatic Adventure"
            location="Greece"
            des="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
            price="165"
            ratting="35"
            hotel
          />
        </Link>
      </div>
      <Link to="/hotels" className="flex justify-center">
        <PButton className="my-10">View All Hotels</PButton>
      </Link>
    </Content>
  );
};

export default TopHotels;
