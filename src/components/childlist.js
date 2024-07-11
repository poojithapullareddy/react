import React from 'react'

export default function childlist(props) {
  return (
    <div>
        {
           props.list.map(person=>(
            <div key={person.id}>i am {person.name} my id is {person.id} my mail {person.email}</div>
           
           )) 
        }
    </div>
  )
}
