import React from "react";
import Header from "../Components/Home/Header/Header";
import CoreFeatures from "../Components/Home/CoreFeatures";
import Places from "../Components/Home/Places/Places";
import BestYear from "../Components/Home/BestYear";
import TourPackages from "../Components/Home/TourPackages/TourPackages";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import TourGuides from "../Components/Home/TourGuides";
import Blogs from "../Components/Home/Blogs/Blogs";
import Partners from "../Components/Shared/Partners";
import TopCategories from "../Components/Home/TopCategories";
import HotelsPackages from "../Components/hotels/HotelsPackages";
import TopDestinations from "../Components/Home/Places/TopDestinations";
import TopDeals from "../Components/Home/TopDeals";

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
      <HotelsPackages />
      <TopDeals />
      <Testimonials />
      <TourGuides />
      <Blogs />
      <Partners />
    </section>
  );
};

export default Home;
