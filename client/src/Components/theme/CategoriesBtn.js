import React from "react";

const CategoriesBtn = ({ children, className, active }) => {
  return (
    <button
      className={`py-3 px-8 w-full rounded-lg border text-start tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 ${className} 
       ${
         active
           ? `bg-primary text-white `
           : `bg-white hover:bg-primary text-black hover:text-white`
       }`}
    >
      {children}
    </button>
  );
};

export default CategoriesBtn;
