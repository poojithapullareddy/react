import React, { Component } from 'react';

const Updatecomponent = (Originalcomponent,incrementednumber)=>{
    
   class HOC extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           count: 0
        };
      }
     
  
      handleCount = () => {
        this.setState((prevstate=>({
         count: prevstate.count+incrementednumber
        })))
      }
      render() {
        return (
          <div><Originalcomponent name="poojitha Reddy" count1={this.state.count}  handleCount1={this.handleCount}/></div>
        )
      }
    }
return HOC

}

export default Updatecomponent
