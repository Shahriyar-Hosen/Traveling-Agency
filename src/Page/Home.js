import React from "react";
import BestYear from "../Components/Home/BestYear";
import Carousel from "../Components/Home/Carousel";
import ExtraServices from "../Components/Home/ExtraServices";
import Header from "../Components/Home/Header";
import Places from "../Components/Home/Places";
import Stories from "../Components/Home/Stories";

const Home = () => {
  return (
    <div>
      <Header />
      
      <Places />
      <BestYear />
      {/* <Stories />
      <ExtraServices /> */}
      <Carousel />
    </div>
  );
};

export default Home;
