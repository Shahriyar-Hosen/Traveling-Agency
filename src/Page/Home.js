import React from "react";
import Header from "../Components/Home/Header";
import Places from "../Components/Home/Places";

const Home = () => {
  return (
    <div>
      <Header />
      <Places />

      <h1 className="text-7xl mt-10 bg-violet-700 text-white p-10">
        Traveling Agency App
      </h1>
    </div>
  );
};

export default Home;
