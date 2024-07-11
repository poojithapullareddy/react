import React, { Component } from 'react'

export class Renderprops extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           count: 0
        };
      }
     
  
      handleCount = () => {
        this.setState((prevstate=>({
         count: prevstate.count+1
        })))
      }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.handleCount)}
      </div>
    )
  }
}

export default Renderprops