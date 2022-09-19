import React from "react";
import LoveGoing from "../Components/Shared/LoveGoing";
import Partners from "../Components/Shared/Partners";
import Header from "../Components/theme/Header";
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
