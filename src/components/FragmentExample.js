import React from 'react'

export default function FragmentExample() {
    const items=['item1','item2','item3']
  return (
   <div>{
items.map((index,item)=>(
    <React.Fragment key={index}>
<h2>{item}</h2>
<p>Description for {item}</p>
    </React.Fragment>
))
}
   </div>
  )
}
