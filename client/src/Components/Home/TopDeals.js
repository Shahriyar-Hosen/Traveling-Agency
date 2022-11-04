import React from "react";
import { Link } from "react-router-dom";
import Content from "../theme/Content";
import DealsCard from "../theme/DealsCard";
import bgImg from "../../Assets/background/shape8.png";

const TopDeals = () => {
  return (
    <div>
      <Content>
        <div className="flex justify-center items-center flex-col gap-5  text-center w-3/4 mx-auto ">
          <h5 className="font-serif text-secondary font-semibold text-lg mt-16">
            Top Deals
          </h5>
          <h1 className="font-serif text-3xl md:text-4xl text-primary ">
            <span className="text-neutral">The Last </span> Minute Deals
          </h1>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* cards */}
        {/* { link, h1, h2, price, rating, time }  */}
        <div className="flex justify-center items-center gap-5 flex-col md:flex-row flex-wrap pt-10">
          <Link to="/tours/1">
            <DealsCard
              link="https://i.ibb.co/bgPWqXP/destination11.jpg"
              h1="Norway Lake"
              h2="Norway"
              price="180.00"
              rating="16"
              time="6 Days"
            />
          </Link>
          <Link to="/tours/1">
            <DealsCard
              link="https://i.ibb.co/1fcPsJc/destination10.jpg"
              h1="New York City"
              h2="Usa"
              price="140.00"
              rating="12"
              time="3 Days"
            />
          </Link>
          <Link to="/tours/1">
            <DealsCard
              link="https://i.ibb.co/87ZfdQL/destination13.jpg"
              h2="Maldives"
              h1="Male City"
              price="140.00"
              rating="12"
              time="3 Days"
            />
          </Link>
        </div>
      </Content>

      <figure>
        <img className="rotate-180 max-h-40 w-full" src={bgImg} alt="" />
      </figure>
    </div>
  );
};

export default TopDeals;
