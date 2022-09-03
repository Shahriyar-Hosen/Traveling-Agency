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

      <h1 className="text-7xl mt-10 bg-violet-700 text-white p-10">
        Traveling Agency App
      </h1>
    </div>
  );
};

export default Home;
