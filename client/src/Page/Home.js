import React from "react";
import Header from "../Components/Home/Header/Header";
import CoreFeatures from "../Components/Home/CoreFeatures";
import Places from "../Components/Home/Places/Places";
import TopDestinations from "../Components/Home/TopDestinations";
import BestYear from "../Components/Home/BestYear";
import TourPackages from "../Components/Home/TourPackages/TourPackages";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import TourGuides from "../Components/Home/TourGuides";
import Blogs from "../Components/Home/Blogs/Blogs";
import Partners from "../Components/Shared/Partners";
import TopCategories from "../Components/Home/TopCategories";

const Home = () => {
  return (
    <section>
      <Header />
      <TopCategories />
      <CoreFeatures />
      <Places />
      <TopDestinations />
      <BestYear />
      <TourPackages />
      <Testimonials />
      <TourGuides />
      <Blogs />
      <Partners />
    </section>
  );
};

export default Home;
