import React from "react";
import BestYear from "../Components/Home/BestYear";
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
    </div>
  );
};

export default Home;
