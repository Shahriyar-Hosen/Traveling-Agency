import React from "react";
import LoveGoing from "../Shared/LoveGoing";
import Partners from "../Shared/Partners";
import CardFull from "../theme/CardFull";
import Content from "../theme/Content";
import Header from "../theme/Header";

const TourLists = () => {
  return (
    <section>
      {/* Full width lists */}
      <Header h1="TOUR LIST" page="Tour Lists" />
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
        <div className="px-5 xxl:px-0 flex flex-col gap-5 justify-center items-center">
          <CardFull
            img="https://i.ibb.co/3mwKys9/destination17.jpg"
            offers="6+ Hours | Full Day Tours"
            title="Leeds Castle, Cliffs Of Dover"
            location="Croatia"
            des1="Taking Safety Measures"
            des2="Free cancellation"
            price="125"
          />
          <CardFull
            img="https://i.ibb.co/PCZ37C8/destination15.jpg"
            offers="6+ Hours | Full Day Tours"
            title="Adriatic Adventure–Zagreb To Athens"
            location="Greece"
            des1="Taking Safety Measures"
            des2="Free cancellation"
            price="160"
          />
          <CardFull
            img="https://i.ibb.co/bgPWqXP/destination11.jpg"
            offers="6+ Hours | Full Day Tours"
            title="The Spanish Riviera Cost Bay"
            location="Spain"
            des1="Taking Safety Measures"
            des2="Free cancellation"
            price="160"
          />
          <CardFull
            img="https://i.ibb.co/Wtq9vhD/destination12.jpg"
            offers="6+ Hours | Full Day Tours"
            title="Adriatic Adventure–Zagreb To Athens"
            location="Greece"
            des1="Taking Safety Measures"
            des2="Free cancellation"
            price="160"
          />
          <CardFull
            img="https://i.ibb.co/5v2b8KB/destination13.jpg"
            offers="6+ Hours | Full Day Tours"
            title="Highlights Scenery Of Vietnam"
            location="Vietnam"
            des1="Taking Safety Measures"
            des2="Free cancellation"
            price="160"
          />
          <CardFull
            img="https://i.ibb.co/1fcPsJc/destination10.jpg"
            offers="6+ Hours | Full Day Tours"
            title="The Spanish Riviera Cost Bay"
            location="Spain"
            des1="Taking Safety Measures"
            des2="Free cancellation"
            price="160"
          />
          <CardFull
            img="https://i.ibb.co/tC2XWHM/destination14.jpg"
            offers="6+ Hours | Full Day Tours"
            title="Empire Prestige Causeway Bay"
            location="SEgyptpain"
            des1="Taking Safety Measures"
            des2="Free cancellation"
            price="160"
          />
        </div>
      </Content>
      <LoveGoing />
      <Partners />
    </section>
  );
};

export default TourLists;
