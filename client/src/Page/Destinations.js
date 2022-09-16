import React from "react";
import DestinationsList from "../Components/Destination/DestinationsList";
import LoveGoing from "../Components/Shared/LoveGoing";
import Partners from "../Components/Shared/Partners";
import Header from "../Components/theme/Header";

const Destinations = () => {
  return (
    <section>
      <Header h1="Destination List" page="Destinations" />
      <DestinationsList />
      <LoveGoing />
      <Partners />
    </section>
  );
};

export default Destinations;
