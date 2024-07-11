import React from 'react'
import Childlist from './childlist'
export default function parentlist() {
    const personsList=[
        {name: 'John',
            id:1,
            email:"john@gmail.com"

        },
        {name: 'John1',
            id:1,
            email:"john@gmail.com"

        },
        {name: 'John2',
            id:3,
            email:"john@gmail.com"

        },
        {name: 'John3',
            id:4,
            email:"john@gmail.com"

        }
    ]
    
  return (
   
    <div>
        <Childlist list={personsList} />

    </div>

  )
}
