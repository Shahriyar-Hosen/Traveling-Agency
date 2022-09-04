import React from "react";
import BestYear from "../Components/Home/BestYear";
import CoreFeatures from "../Components/Home/CoreFeatures";
import Header from "../Components/Home/Header";
import Places from "../Components/Home/Places";

const Home = () => {
  return (
    <div>
      <Header />
      <CoreFeatures />
      <Places />
      <BestYear />
    </div>
  );
};

export default Home;
