import React, { Component } from 'react'

export class mountinglifecyclemethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      };
      console.log("constructor calling")
    }

    
    componentDidMount(){
        console.log("componentDidMount calling")
    }
  render() {
    console.log("render");
    return (
      <div>mountinglifecyclemethod</div>
    )
  }
}

export default mountinglifecyclemethod