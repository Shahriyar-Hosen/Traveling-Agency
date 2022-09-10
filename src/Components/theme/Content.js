import React from "react";

const Content = ({ children, className }) => {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
};

export default Content;
