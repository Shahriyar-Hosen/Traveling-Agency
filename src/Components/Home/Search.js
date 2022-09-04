import React from "react";
import { VscLocation } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="md:flex flex-col justify-center items-center  shadow-gray-900 mt-16">
      <div className="flex justify-center items-center bg-primary text-white w-96 md:w-44  mx-auto h-24 rounded-lg rounded-b-none md:rounded-r-none gap-3 text-xl font-serif font-semibold pl-5">
        <VscLocation className="text-3xl md:text-6xl text-white" />{" "}
        <span>Find Your Holidays</span>
      </div>
      <div className="w-96 mx-auto">
        <form className="flex flex-col md:flex-row justify-center items-center gap-3 px-5 pb-5 rounded-lg shadow-xl shadow-gray-100">
          <input
            type="text"
            placeholder="Destination"
            class="w-full max-w-sm py-3 px-3 text-xs border outline-gray-400 rounded-md mt-3"
          />
          <input
            type="text"
            placeholder="dd/mm/yyy"
            class="w-full max-w-sm py-3 px-3 text-xs border outline-gray-400 rounded-md"
          />
          <input
            type="text"
            placeholder="Travel Type"
            class="w-full max-w-sm py-3 px-3 text-xs border outline-gray-400 rounded-md"
          />
          <input
            type="text"
            placeholder="Tour Duration"
            class="w-full max-w-sm py-3 px-3 text-xs border outline-gray-400 rounded-md"
          />
          <button className="flex justify-center items-center gap-1 bg-primary w-full rounded-md py-3 text-white text-sm font-mono">
            <FaSearch className="text-xs" /> <span>Search Now</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
