import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

{
  /*  */
}
const Search = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-primary">
        <GrLocation /> <span>Find Your Holidays</span>
      </div>
      
      <form action="">
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-primary w-full max-w-xs"
        />
        <button>
          <FaSearch /> <span>Search Now</span>
        </button>
      </form>
    </div>
  );
};

export default Search;
