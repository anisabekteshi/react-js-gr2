import React, { useState } from 'react'

function ObjectList() {
    const [students,setStudents]=useState([
        {
            id:1,
            firstName:"Anisa",
            lastName:"Bekteshi",
        },
        {
            id:2,
            firstName:"Urim",
            lastName:"Avdiu",
        },
        {
            id:3,
            firstName:"Rijon",
            lastName:"Tahiri",
        }
    ])
        const [show,setShow]=useState(true);
        const[isLineThrough,setIsLineThrough]=useState(false);
        console.log(students);
        const handleLineThrough = () => {
            setIsLineThrough(!isLineThrough);
        }
  return (

        <div>

            <button onClick={()=>setShow(!show)}> 
            {show ? "Hide": "Show"}
        </button>
            <ul>
                {show &&
                    students.map((student)=>(
                        <li key={student.id}  
                        style={{textDecoration: isLineThrough ? "line-through" : "none"}}
                        onClick={handleLineThrough} >{student.firstName}</li>
                    ))
                }

            </ul>
        </div>

  )
}

export default ObjectList