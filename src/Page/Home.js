import React from "react";
import BestYear from "../Components/Home/BestYear";
import Header from "../Components/Home/Header";
import Places from "../Components/Home/Places";

const Home = () => {
  return (
    <div>
      <Header />
      
      <Places />
      <BestYear />
    </div>
  );
};

export default Home;
