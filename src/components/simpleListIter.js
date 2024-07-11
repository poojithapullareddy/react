// import React from 'react'

// export default function simpleListIter() {
//    const  NameList=["pallavi","nikitha","nijav","paviutra"]
//   return (
//     <div>
//         <h1>{NameList.map(name=>(
//            <div>{name}</div> 
//         ))}</h1>
//     </div>
//   )
// }

import React from 'react'

export default function simpleListIter() {
    const list=["a", "b", "c"]
  return (
    <div>
       {
        list.map(alpa=>(
          <div> {alpa}</div> 
        ))
       }

    </div>
  )
}
