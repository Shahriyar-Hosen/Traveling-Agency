import React from "react";
import BestYear from "../Components/Home/BestYear";
import CoreFeatures from "../Components/Home/CoreFeatures";
import Header from "../Components/Home/Header";
import TopDestinations from "../Components/Home/TopDestinations";
import Places from "../Components/Places/Places";

const Home = () => {
  return (
    <div>
      <Header />
      <CoreFeatures />
      <TopDestinations />
      <Places />
      <BestYear />
    </div>
  );
};

export default Home;
