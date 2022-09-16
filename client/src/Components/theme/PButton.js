import React from "react";

const PButton = ({ className, children }) => {
  return (
    <button
      className={`py-3 px-8 bg-primary hover:bg-secondary rounded-lg text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default PButton;
