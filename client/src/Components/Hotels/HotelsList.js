import React from "react";
import CardFull from "../theme/CardFull";
import Content from "../theme/Content";

const HotelsList = () => {
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
      <div className="px-5 xxl:px-0 flex flex-col gap-5 justify-center items-center">
        <CardFull
          img="https://i.ibb.co/KsHgF2v/Luxury-Hotels.jpg"
          offers="6+ Hours | Full Day Tours"
          title="Leeds Castle, Cliffs Of Dover"
          location="Croatia"
          des1="Taking Safety Measures"
          des2="Free cancellation"
          price="125"
        />
        <CardFull
          img="https://i.ibb.co/7pVMhhP/Hotels.png"
          offers="6+ Hours | Full Day Tours"
          title="Adriatic Adventure–Zagreb To Athens"
          location="Greece"
          des1="Taking Safety Measures"
          des2="Free cancellation"
          price="160"
        />
        <CardFull
          img="https://i.ibb.co/XSL4zjL/Poseidon-Undersea-Resort-in-Fiji.jpg"
          offers="6+ Hours | Full Day Tours"
          title="The Spanish Riviera Cost Bay"
          location="Spain"
          des1="Taking Safety Measures"
          des2="Free cancellation"
          price="160"
        />
        <CardFull
          img="https://i.ibb.co/TRckYZB/Lappartement-14-695x390.jpg"
          offers="6+ Hours | Full Day Tours"
          title="Adriatic Adventure–Zagreb To Athens"
          location="Greece"
          des1="Taking Safety Measures"
          des2="Free cancellation"
          price="160"
        />
        <CardFull
          img="https://i.ibb.co/QPdvFw1/LTI.jpg"
          offers="6+ Hours | Full Day Tours"
          title="Highlights Scenery Of Vietnam"
          location="Vietnam"
          des1="Taking Safety Measures"
          des2="Free cancellation"
          price="160"
        />
        <CardFull
          img="https://i.ibb.co/fXbs3QX/Conrad-Shenyang-Hilton-luxury-hotels.jpg"
          offers="6+ Hours | Full Day Tours"
          title="The Spanish Riviera Cost Bay"
          location="Spain"
          des1="Taking Safety Measures"
          des2="Free cancellation"
          price="160"
        />
        <CardFull
          img="https://i.ibb.co/D8jbyKp/The-Muraka-Undersea-Bedroom-scaled.jpg"
          offers="6+ Hours | Full Day Tours"
          title="Empire Prestige Causeway Bay"
          location="SEgyptpain"
          des1="Taking Safety Measures"
          des2="Free cancellation"
          price="160"
        />
      </div>
    </Content>
  );
};

export default HotelsList;
