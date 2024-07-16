import React, { useState } from 'react'

export default function Hook3() {
    const[originalname,updatedname]=useState({firstname:"",lastname:""})
  return (
    <div>
        <input type="text" value={originalname.firstname} onChange={e=>{updatedname({...originalname,firstname:e.target.value})}}/>
        <input type="text" value={originalname.lastname} onChange={e=>{updatedname({...originalname,lastname:e.target.value})}}/>
        <h3>{JSON.stringify(originalname)}</h3>
    </div>
  )
}
