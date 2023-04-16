import React, { useState } from 'react'

const Home = () => {

    const [start,setStart]=useState("");
    const[end,setEnd]=useState("");

    const submitHandler=()=>{
        
    }

  return (
    
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='starting Station' value={start} onChange={(e)=>setStart(e.target.value)} />
            <input type='text' placeholder='end Station' value={end} onChange={(e)=>setEnd(e.target.value)}/>
            <button type='submit'>Find Train</button>
        </form>
    </div>
  )
}

export default Home