import React from "react";
import Header from "../Shared/Header";
import LoveGoing from "../Shared/LoveGoing";
import Partners from "../Shared/Partners";
import Collapse from "../theme/Collapse";
import Content from "../theme/Content";
import Description from "../theme/Description";
import Expect from "../theme/Expect";
import Gallery from "../theme/Gallery";
import HeadLine from "../theme/HeadLine";
import Map from "../theme/Map";
import Reviews from "../theme/Reviews";

const Tour = () => {
  const galleryImg = [
    "https://i.ibb.co/r77YXNS/trending1.jpg",
    "https://i.ibb.co/zGzhCkz/trending2.jpg",
    "https://i.ibb.co/jrGj182/trending3.jpg",
  ];
  return (
    <section>
      {/* Full width Tour page */}
      <Header h1="Tour single" page="Tour Single Three" />
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

export default Tour;
