import React from 'react'

export default function errorHandlingnormal(props) {
if(props.name==="sravani"){
    throw new Error("she is stupid")
}
  return (
    <div>{props.name}</div>
  )
}
