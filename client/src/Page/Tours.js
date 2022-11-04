import React from "react";
import Header from "../Components/Shared/Header";
import LoveGoing from "../Components/Shared/LoveGoing";
import Partners from "../Components/Shared/Partners";
import TourLists from "../Components/TourLists/TourLists";

const Tours = () => {
  return (
    <section>
      <Header h1="TOUR LIST" page="Tour Lists" />
      <TourLists />
      <LoveGoing />
      <Partners />
    </section>
  );
};

export default Tours;
