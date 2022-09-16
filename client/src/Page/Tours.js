import React from "react";
import LoveGoing from "../Components/Shared/LoveGoing";
import Partners from "../Components/Shared/Partners";
import TourLists from "../Components/TourLists/TourLists";

const Tours = () => {
  return (
    <section>
      <TourLists />
      <LoveGoing />
      <Partners />
    </section>
  );
};

export default Tours;
