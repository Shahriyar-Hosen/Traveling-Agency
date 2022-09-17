import React from "react";
import LoveGoing from "../Shared/LoveGoing";
import Partners from "../Shared/Partners";
import Content from "../theme/Content";
import Header from "../theme/Header";
import Collapse from "./Collapse";
import Description from "./Description";
import Expect from "./Expect";
import Gallery from "./Gallery";
import Map from "./Map";
import Reviews from "./Reviews";
import TourHeader from "./TourHeader";

const Tour = () => {
  return (
    <section>
      {/* Full width Tour page */}
      <Header h1="Tour single" page="Tour Single Three" />
      <Content className="px-3">
        {/* Header */}
        <TourHeader />
        {/* Gallery */}
        <Gallery />
        {/* Description */}
        <Description />
        {/* What To Expect */}
        <Expect />
        {/* Collapse */}
        <Collapse />
        {/* Map */}
        <Map />
        {/* Reviews */}
        <Reviews />
      </Content>
      <LoveGoing />
      <Partners />
    </section>
  );
};

export default Tour;
