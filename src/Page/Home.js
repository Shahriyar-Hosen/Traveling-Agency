import React from "react";
import BestYear from "../Components/Home/BestYear";
import CoreFeatures from "../Components/Home/CoreFeatures";
import Header from "../Components/Home/Header";
import TopDestinations from "../Components/Home/TopDestinations";
import Places from "../Components/Home/Places/Places";
import TourPackages from "../Components/Home/TourPackages/TourPackages";
import TopDeals from "../Components/Home/TopDeals/TopDeals";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import TourGuides from "../Components/Home/TourGuides";
import Blogs from "../Components/Home/Blogs/Blogs";

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
      <TourGuides />
      <Blogs />
    </section>
  );
};

export default Home;
