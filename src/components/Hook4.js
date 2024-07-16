import React, { useEffect, useState } from 'react'

export default function Hook4() {
    const[count, setCount]=useState(0);
    useEffect(()=>{
        document.title="you clciked "+count +"times";
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}
