import React from "react";
const Boxes = ({ stylesArr }) => {
  const BoxesFunc = () => {
    return stylesArr.map((elem) => <div style={elem}></div>);
  };
  return <div>{BoxesFunc()}</div>;
};

export default Boxes;
