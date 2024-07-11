import React, { Component } from 'react'
import Regcomponent from './regcomponent'
import Purecomponent from './purecomponent'
import Rectmemo from './rectmemo'
export class parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'poojitha'
      }
    }
    componentDidMount(){
        setInterval(() => {this.setState({name:'poojitha'})},2000)   
    }
  render() {
    console.log("parent       ===========")
    return (
      <div>
        {/* <Regcomponent></Regcomponent>
        <Purecomponent></Purecomponent> */}
        <Rectmemo name={this.state.name}/>
      </div>
      
    )
  }
}

export default parentcomp
