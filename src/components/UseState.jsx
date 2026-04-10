import React,  { useState } from 'react';

function UseState() {
  const [color, setColor] = useState("black");

  const changeColor = () => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div>
      <h1 style={{ color: color }} onClick={changeColor}>
        Ndrysho ngjyren!
      </h1>
    </div>
  );
}

export default UseState;