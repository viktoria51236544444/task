import React, { useState } from "react";

const Task1 = () => {
  const [state, setState] = useState("hello");
  const InputFunc = (event) => {
    setState(event.target.value);
  };
  return (
    <div>
      <p>{state}</p>
      <input type="text" value={state} onChange={InputFunc} />
    </div>
  );
};

export default Task1;
