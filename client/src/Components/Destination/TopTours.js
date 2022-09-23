import React from "react";
import { Link } from "react-router-dom";
import Content from "../theme/Content";
import DealsCard from "../theme/DealsCard";
import PButton from "../theme/PButton";

const TopTours = () => {
  return (
    <Content>
      <div className="flex justify-center items-center flex-col gap-5  text-center w-3/4 mx-auto ">
        <h5 className="font-serif text-secondary font-semibold text-lg mt-16">
          Top Tours
        </h5>
        <h1 className="font-serif text-3xl md:text-4xl text-primary ">
          <span className="text-neutral">Tours Package </span> of This Place
        </h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* cards */}
      {/* { link, h1, h2, price, rating, time }  */}
      <div className="flex justify-center items-center gap-5 flex-col md:flex-row flex-wrap py-10 md:pb-0">
        <DealsCard
          link="https://i.ibb.co/bgPWqXP/destination11.jpg"
          h1="Norway Lake"
          h2="Norway"
          price="180.00"
          rating="16"
          time="6 Days"
        />
        <DealsCard
          link="https://i.ibb.co/1fcPsJc/destination10.jpg"
          h1="New York City"
          h2="Usa"
          price="140.00"
          rating="12"
          time="3 Days"
        />
        <DealsCard
          link="https://i.ibb.co/87ZfdQL/destination13.jpg"
          h2="Maldives"
          h1="Male City"
          price="140.00"
          rating="12"
          time="3 Days"
        />
      </div>
      <Link to="/tours" className="flex justify-center">
        <PButton className="mb-5">View All Tours</PButton>
      </Link>
    </Content>
  );
};

export default TopTours;
