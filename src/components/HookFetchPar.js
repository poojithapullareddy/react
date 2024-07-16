import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function HookFetchPar() {
const[id,setId]=useState(1)
const[post,setPost]=useState({})
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>{
        console.log(res);
        setPost(res.data);
    }).catch(err =>console.log(err));
},[id])
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
        <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
    </div>
  )
}
