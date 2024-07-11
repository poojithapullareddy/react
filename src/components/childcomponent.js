import React from 'react'

// export default function childcomponent(props) {
//   return (
//     <div>
//         <h1>childcomponent</h1>
//         <h1>{props.id}</h1>
//         <button onClick={props.onclick} >click here</button>
//     </div>
//   )
 function childcomponent(props) {
    const{id,onClick} = props;
    return (
      <div>
          <h1>childcomponent</h1>
          <h1>{id}</h1>
          <button onClick={onClick} >click here</button>
      </div>
    )
}

const component=(props)=>{
    const{id,onClick} = props;
    return (
        <div>
            <h1>childcomponent22</h1>
            <h1>{id}</h1>
            <button onClick={onClick} >click here</button>
        </div>
      )
}
export default component