import React from "react";
import Task1 from "./components/Task1";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Task4 from "./components/Task4";

const App = () => {
  const stylesArr = [
    {
      width: "300px",
      height: "150px",
      backgroundColor: "red",
    },
    {
      width: "400px",
      height: "200px",
      backgroundColor: "green",
    },
    {
      width: "500px",
      height: "250px",
      backgroundColor: "black",
    },
  ];
  return (
    <div>
      <Task1 />
      <br />
      <Boxes stylesArr={stylesArr} />
      <br />
      <Card>
        <Avatar
          src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-city-washed-away-by-water-at-night-image_2925207.jpg"
          alt="Image"
        />
      </Card>
      <br />
      <Task4 />
    </div>
  );
};

export default App;
