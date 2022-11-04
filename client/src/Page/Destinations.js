import React from "react";
import DestinationsList from "../Components/Destination/DestinationsList";
import Header from "../Components/Shared/Header";
import LoveGoing from "../Components/Shared/LoveGoing";
import Partners from "../Components/Shared/Partners";

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
