import React from "react";
import Banner from "./Banner/Banner";
import BannerSlider from "./Banner/BannerSlider";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <Banner />
      <BannerSlider />
      <Search />
    </>
  );
};

export default Header;
