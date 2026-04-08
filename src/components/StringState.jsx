import React, { useState } from 'react'

function StringState() {
    const [color,setColor] =useState("orange");
  return (
    <div style={{background:color}}>
        <button onClick={()=>{setColor("red")}}>Red</button>
        <button onClick={()=>{setColor("green")}}>Green</button>
        <button onClick={()=>{setColor("blue")}}>Blue</button>
    </div>
  )
}

export default StringState