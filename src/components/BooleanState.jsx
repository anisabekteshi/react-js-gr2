import React, { useState } from 'react'

function BooleanState() {
    const [show,setShow]= useState(false);
  return (
    <>
        <button onClick={()=>setShow(!show)}> 
            {show ? "Hide": "Show"}
        </button>

        {
          show &&  <p>Show this content</p>
        }
    </>
  )
}

export default BooleanState