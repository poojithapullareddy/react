import React, { Component } from 'react'
import Myclassrefexample from './myclassrefexample';
export class focusref extends Component {
    constructor(props) {
      super(props)
    this.ref=React.createRef();
    }
    handlermethod=()=>{
        this.ref.current.focusinput();
    }
  render() {
    return (
      <div>
        <Myclassrefexample ref={this.ref}/>
     
        <button onClick={this.handlermethod}>clickforfocus</button>
      </div>
    )
  }
}

export default focusref
