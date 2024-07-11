import React, { Component } from 'react'

export class childpropmethod extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        first:props.onClick
//     }
//   }
  
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>propsasmethod</button>
      </div>
    )
  }
}

export default childpropmethod