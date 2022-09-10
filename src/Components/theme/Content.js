import React from "react";

const Content = ({ children, className, style }) => {
  return (
    <section style={style} className={`max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Content;
