import React, { useState } from 'react'

function ArrayState() {
  const [task,setTask]= useState("");
  const [tasks,setTasks]=useState([]);
  const addTask = () => {
    if(task.trim() === ""){
      return
    } 
    setTasks(tasks.concat(task));
    setTask("");
  }
  return (
    <>
      <input onChange={(event)=>{setTask(event.target.value)}}
      value={task}
       />

       <button onClick={addTask}>Add</button>
       <ul>
          {
            tasks.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          }
       </ul>
    </>
  )
}

export default ArrayState