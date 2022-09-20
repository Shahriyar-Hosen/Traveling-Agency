import React from "react";
import { FaSearch } from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";
import Content from "../../theme/Content";

const Search = () => {
  return (
    <Content>
      <div
        className="flex lg:flex-row flex-col justify-center items-center shadow-lg shadow-primary mx-10 sm:mx-24 md:mx-40 rounded-lg mt-16 lg:mt-2 
    "
      >
        <div className="flex justify-center items-center bg-primary text-white w-full lg:w-44  mx-auto h-24 rounded-lg rounded-b-none lg:rounded-l-lg lg:rounded-r-none gap-3 text-xl font-serif font-semibold pl-5">
          <VscLocation className="text-3xl lg:text-6xl text-white" />{" "}
          <span>Find Your Holidays</span>
        </div>
        <form className="w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-3 px-5 pb-5 lg:pb-0 rounded-lg">
          <input
            type="text"
            placeholder="Destination"
            className="w-full  py-3 px-3 text-xs border outline-gray-400 rounded-md mt-3 lg:mt-0"
          />
          <input
            type="text"
            placeholder="dd/mm/yyy"
            className="w-full  py-3 px-3 text-xs border outline-gray-400 rounded-md"
          />
          <input
            type="text"
            placeholder="Travel Type"
            className="w-full  py-3 px-3 text-xs border outline-gray-400 rounded-md"
          />
          <input
            type="text"
            placeholder="Tour Duration"
            className="w-full  py-3 px-3 text-xs border outline-gray-400 rounded-md"
          />
          <button className="flex justify-center items-center gap-1 bg-primary w-full rounded-md py-3 px-5 text-white text-sm font-mono">
            <FaSearch className="text-xs" /> <span>Search Now</span>
          </button>
        </form>
      </div>
    </Content>
  );
};

export default Search;
