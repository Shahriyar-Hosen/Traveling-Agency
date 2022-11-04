import React from "react";
import logo from "../../Assets/log/logo.png";
import Content from "../theme/Content";

const ComingSoon = () => {
  return (
    <Content className="relative">
      <img
        className="w-full min-h-screen max-h-screen"
        src="https://res.cloudinary.com/dev-shahriyar/image/upload/v1663909751/Pages/Coming-soon-yello_zilsgl.jpg"
        alt=""
      />
      <div className="absolute top-24 left-0 right-0 z-10 flex justify-center items-center">
        <img src={logo} alt="" />
      </div>
    </Content>
  );
};

export default ComingSoon;
