import React, { useEffect, useState } from 'react'

export default function Hook5() {
    const[count,setCount] =useState(0)
    const[name,setName]=useState("")
    useEffect(()=>{
        console.log('hello i am rendering')
        document.title="you clciked "+count +"times";
        return()=>{
           // window.removeEventListener(count,setCount)
        }
    },[count])
  return (
    <div>
<input type='text'value={name} onChange={e=>setName(e.target.value)}/>
<h1 onMouseOver={()=>setCount(count+1)}> {count}</h1>
<button onClick={()=>setCount(count+1)} >click</button>
    </div>
  )
}
