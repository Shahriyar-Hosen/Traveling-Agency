import React from "react";
import Content from "../theme/Content";

const Header = () => {
  return (
    <div
      className="bg-fixed relative h-[500px] md:h-[600px]"
      style={{
        background: `url(https://i.ibb.co/6bMmXfm/bg.png)`,
        backgroundSize: "cover",
      }}
    >
      <Content>
        <div className="text-white flex flex-col justify-center items-center pt-32 md:pt-52">
          <h1 className="text-4xl font-semibold font-serif">
            DESTINATION LIST
          </h1>
          <p className="text-lg">
            <span className="text-primary">Home</span> | Destination Lists
          </p>
        </div>
      </Content>
      <figure className="absolute bottom-0">
        <img
          className="rotate-180 w-full min-h-[180px]"
          src="https://i.ibb.co/mGnbXdH/shape8.png"
          alt=""
        />
      </figure>
    </div>
  );
};

export default Header;
