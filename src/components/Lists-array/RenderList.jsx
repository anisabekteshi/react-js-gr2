import React from 'react'

function RenderList() {
    const sports = ["football","basket","golf"];
    const scores = [10,30,45,67];
  return (
    <div>
        <ul>
            {
                sports.map((sport,index)=>(
                    <li key={index}>{sport}</li>
                )
                
                )
            }
        </ul>

        <ul>
            {
                scores.map((score,index)=>(
                    <li key={index}>{score}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default RenderList