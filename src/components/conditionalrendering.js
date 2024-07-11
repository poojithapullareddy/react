import React, { Component } from 'react'

export class conditionalrendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogedin: false,
      }
    }
  render() {
 
        
    //   if(this.state.islogedin==true) {
    //    return <div>hello i am here</div>
    //   }else {
    //    return  <div>sorry!</div>
    //   }
  
     if(this.state.islogedin&&<div>sorry!</div>)
        return <div>sorry!</div>
    
  }
}

export default conditionalrendering