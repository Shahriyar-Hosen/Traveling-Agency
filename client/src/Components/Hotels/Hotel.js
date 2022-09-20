import React from "react";
import LoveGoing from "../Shared/LoveGoing";
import Partners from "../Shared/Partners";
import Collapse from "../theme/Collapse";
import Content from "../theme/Content";
import Description from "../theme/Description";
import Expect from "../theme/Expect";
import Gallery from "../theme/Gallery";
import Header from "../theme/Header";
import HeadLine from "../theme/HeadLine";
import Map from "../theme/Map";
import Reviews from "../theme/Reviews";

const Hotel = () => {
  const galleryImg = [
    "https://i.ibb.co/YcnqRSK/single3.webp",
    "https://i.ibb.co/KsHgF2v/Luxury-Hotels.jpg",
    "https://i.ibb.co/5YD96h2/single1.jpg",
  ];
  return (
    <section>
      {/* Full width Hotel page */}
      <Header h1="Hotel single" page="Hotel" />
      <Content className="px-3">
        {/* Header */}
        <HeadLine
          title={"Adriatic Adventure-Zagreb To Athens"}
          location={"Greater London, United Kingdom"}
          ratting={"1,186"}
        />
        {/* Gallery */}
        <Gallery images={galleryImg} />
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

export default Hotel;
