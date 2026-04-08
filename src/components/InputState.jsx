import React, { useState } from 'react'

function InputState() {
    const [name,setName]=useState("");
  return (
    <>
        <input type="text" 
            onChange={(event)=>{setName(event.target.value)}}
        />   
        <p>{name}</p> 
    </>
  )
}

export default InputState