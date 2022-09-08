import React from "react";
import BestYear from "../Components/Home/BestYear";
import CoreFeatures from "../Components/Home/CoreFeatures";
import Header from "../Components/Home/Header";
import TopDestinations from "../Components/Home/TopDestinations";
import Places from "../Components/Home/Places/Places";
import TourPackages from "../Components/Home/TourPackages/TourPackages";
import TopDeals from "../Components/Home/TopDeals/TopDeals";
import Testimonials from "../Components/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <section>
      <Header />
      <CoreFeatures />
      <Places />
      <TopDestinations />
      <BestYear />
      <TourPackages />
      <TopDeals />
      <Testimonials />
    </section>
  );
};

export default Home;
