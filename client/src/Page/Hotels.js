import React from "react";
import HotelsList from "../Components/Hotels/HotelsList";
import LoveGoing from "../Components/Shared/LoveGoing";
import Partners from "../Components/Shared/Partners";
import Header from "../Components/theme/Header";

const Hotels = () => {
  return (
    <section>
      <Header h1="Hotels LIST" page="Hotels" />
      <HotelsList />
      <LoveGoing />
      <Partners />
    </section>
  );
};

export default Hotels;
