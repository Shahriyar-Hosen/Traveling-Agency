import React from "react";
import { useParams } from "react-router-dom";
import { useGetHotelQuery } from "../../features/hotels/hotelsApi";
import Header from "../Shared/Header";
import LoveGoing from "../Shared/LoveGoing";
import Partners from "../Shared/Partners";
import Collapse from "../theme/Collapse";
import Content from "../theme/Content";
import Description from "../theme/Description";
import Expect from "../theme/Expect";
import Gallery from "../theme/Gallery";
import HeadLine from "../theme/HeadLine";
import MapCompo from "../theme/Map";
import Reviews from "../theme/Reviews";

const Hotel = () => {
  const { hotelId } = useParams();
  const {
    data: hotel,
    isLoading,
    isError,
    error,
  } = useGetHotelQuery(hotelId) || {};

  console.log(hotel);

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    console.log("Error Message:- ", error?.data);
    content = (
      <li className="m-2 text-center">
        {/* <Error message={error?.data} /> */}
      </li>
    );
  } else if (!isLoading && !isError && hotel?.length === 0) {
    content = <p className="m-2 text-center">No hotels Found</p>;
  } else if (!isLoading && !isError && hotel?.length > 0) {
    content = (
      <>
        {hotel.map((hotel) => {
          const {
            _id,
            address,
            cheapestPrice,
            city,
            desc,
            name,
            photos,
            title,
            rating,
          } = hotel || {};

          console.log(
            address,
            cheapestPrice,
            city,
            desc,
            name,
            photos,
            title,
            rating
          );

          return <div key={_id}></div>;
        })}
      </>
    );
  }
  console.log(content);

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
        <MapCompo />
        {/* Reviews */}
        <Reviews />
      </Content>
      <LoveGoing />
      <Partners />
    </section>
  );
};

export default Hotel;
