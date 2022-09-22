import React from "react";
import Content from "../theme/Content";
import TopCategoriesSlider from "./TopCategoriesSlider";

const TopCategories = () => {
  return (
    <Content className="w-full px-3 py-20 flex flex-col lg:flex-row gap-5 justify-start items-center">
      <div className="bg-primary w-full lg:w-48 py-10 text-4xl lg:text-3xl px-5 font-semibold text-white flex justify-center items-center rounded-lg text-center">
        Top Categories
      </div>
      <TopCategoriesSlider />
    </Content>
  );
};

export default TopCategories;
