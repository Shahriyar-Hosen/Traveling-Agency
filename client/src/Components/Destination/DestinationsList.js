import React from "react";
import LoveGoing from "../Shared/LoveGoing";
import Partners from "../Shared/Partners";
import Content from "../theme/Content";
import DestinationCard from "../theme/DestinationCard";

const DestinationsList = () => {
  return (
    <section>
      
      <Content>
        <div className="flex justify-center items-center flex-col gap-5  text-center w-3/4 mx-auto">
          <h5 className="font-serif text-secondary font-semibold text-lg mt-16">
            Top Destinations
          </h5>
          <h1 className="font-serif text-3xl md:text-4xl text-primary ">
            <span className="text-black">Explore</span> Top Destinations
          </h1>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="grid justify-items-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
          <DestinationCard
            img="https://i.ibb.co/WsrVvYH/agra.jpg"
            place="Agra"
            country="India"
            time="22 Hours"
          />
          <DestinationCard
            img="https://i.ibb.co/FJz4sxT/istanbul.jpg"
            place="Istanbul"
            country="Turkey"
            time="24 Hours"
          />
          <DestinationCard
            img="https://i.ibb.co/SV5RJhP/dubai.jpg"
            place="Dubai"
            country="United Arab Emirates"
            time="48 Hours"
          />
          <DestinationCard
            img="https://i.ibb.co/sRMwdrN/cox-s-bazar.jpg"
            place="Cox's Bazar"
            country="Bangladesh"
            time="12 Hours"
          />
          <DestinationCard
            img="https://htmldesigntemplates.com/html/travelin/images/destination/destination4.jpg"
            place="Bali"
            country="Indonesia"
            time="17 Hours"
          />
          <DestinationCard
            img="https://htmldesigntemplates.com/html/travelin/images/destination/destination10.jpg"
            place="Bali"
            country="Indonesia"
            time="14 Hours"
          />
          <DestinationCard
            img="https://htmldesigntemplates.com/html/travelin/images/destination/destination16.jpg"
            place="Florida"
            country="America"
            time="32 Hours"
          />
          <DestinationCard
            img="https://htmldesigntemplates.com/html/travelin/images/destination/destination5.jpg"
            place="Bangkok"
            country="Thailand"
            time="24 Hours"
          />
          <DestinationCard
            img="https://htmldesigntemplates.com/html/travelin/images/destination/destination15.jpg"
            place="Moscow"
            country="Russia"
            time="18 Hours"
          />
          <DestinationCard
            img="https://htmldesigntemplates.com/html/travelin/images/destination/destination17.jpg"
            country="Italy"
            place="Caspian Valley"
            time="18 Hours"
          />
          <DestinationCard
            img="https://htmldesigntemplates.com/html/travelin/images/destination/destination14.jpg"
            country="Japan"
            place="Tokyo"
            time="21 Hours"
          />
          <DestinationCard
            img="https://htmldesigntemplates.com/html/travelin/images/destination/destination1.jpg"
            country="England"
            place="London"
            time="15 Hours"
          />
        </div>
      </Content>
    </section>
  );
};

export default DestinationsList;
