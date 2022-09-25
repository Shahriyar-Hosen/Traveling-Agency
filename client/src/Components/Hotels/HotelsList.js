import React from "react";
import { Link } from "react-router-dom";
import { useGetHotelsQuery } from "../../features/hotels/hotelsApi";
import CardFull from "../theme/CardFull";
import Content from "../theme/Content";

const HotelsList = () => {
  const { data: hotels, isLoading, isError, error } = useGetHotelsQuery() || {};

  /* {_id, address, cheapestPrice, city, desc, distance, featured, name, photos, rooms, title, type } */

  /* {img = photos, offers = name, title, location = city, des1 = desc.slice(0, 20), des2 = address, price = cheapestPrice, ratting } */

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = (
      <li className="m-2 text-center">
        {/* <Error message={error?.data} /> */}
      </li>
    );
  } else if (!isLoading && !isError && hotels?.length === 0) {
    content = <p className="m-2 text-center">No hotels Found</p>;
  } else if (!isLoading && !isError && hotels?.length > 0) {
    content = (
      <>
        {hotels.map((hotel) => {
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

          return (
            <Link to={`/hotels/${_id}`} key={_id}>
              <CardFull
                img={photos[0]}
                offers={name}
                title={title.length >= 40 ? title.slice(0, 40) + " ..." : title}
                location={city}
                des1={desc.length >= 20 ? desc.slice(0, 20) + " ..." : desc}
                des2={
                  address.length >= 30 ? address.slice(0, 30) + " ..." : address
                }
                price={cheapestPrice}
                ratting={rating || 0}
              />
            </Link>
          );
        })}
      </>
    );
  }
  return (
    <Content>
      {/* page info & filter */}
      <div className="flex justify-between items-center px-5">
        <h5 className="text-lg">Showing 1-5 of 80 results</h5>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title  ">
            {" "}
            <span className="border rounded-md text-lg px-3 py-2">
              short by
            </span>{" "}
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="px-5 xxl:px-0 flex flex-col gap-5 justify-center items-center pb-10">
        {content}
      </div>
    </Content>
  );
};

export default HotelsList;
