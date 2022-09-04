import React from "react";

const PButton = ({ children }) => {
  return (
    <button className="py-3 px-8 bg-primary hover:bg-secondary rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500">
      {children}
    </button>
  );
};

export default PButton;
