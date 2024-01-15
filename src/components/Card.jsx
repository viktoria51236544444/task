import React from "react";

const Card = ({ children }) => {
  const style = { border: "2px solid grey" };
  return <div style={style}>{children}</div>;
};

export default Card;
