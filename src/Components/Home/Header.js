import React from "react";
import Banner from "./Banner";
import BannerSlider from "./BannerSlider";
import Search from "./Search";

const Header = () => {
  return (
    <div>
      {/* <Banner /> */}
      <BannerSlider />
      <Search />
    </div>
  );
};

export default Header;
