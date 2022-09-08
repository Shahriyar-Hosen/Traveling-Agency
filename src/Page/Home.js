import React from "react";
import BestYear from "../Components/Home/BestYear";
import CoreFeatures from "../Components/Home/CoreFeatures";
import Header from "../Components/Home/Header";
import TopDestinations from "../Components/Home/TopDestinations";
import Places from "../Components/Places/Places";
import TourPackages from "../Components/TourPackages/TourPackages";

const Home = () => {
  return (
    <section>
      <Header />
      <CoreFeatures />
      <Places />
      <TopDestinations />
      <BestYear />
      <TourPackages />
    </section>
  );
};

export default Home;
