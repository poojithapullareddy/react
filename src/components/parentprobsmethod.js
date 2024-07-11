import React, { Component } from 'react'
import Childpropmethod from './childpropmethod';
export class parentprobsmethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:"parent"
      }
    }

    greatParent=()=>{
        alert(" hey i am Parent");
    }

  render() {
    return (
      <div>
        <Childpropmethod onClick={this.greatParent}/>
      </div>
    )
  }
}

export default parentprobsmethod