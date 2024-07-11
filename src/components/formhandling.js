import React, { Component } from 'react'

export class formhandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username:'' ,
        comments:'' ,
        // select:''
      }
    }
    handleusername=(event)=>{
        this.setState({username:event.target.value})
      
    }
    handlecommentschange=(event)=>{
      this.setState({comments:event.target.value})
    }
    handleselectchange=(event)=>{
        this.setState({
 select:event.target.value})
    }
    onSubmit1=(event)=>{
alert(`${this.state.username},${this.state.comments},${this.state.select}`);
event.preventDefault();

    }
  render() {
    return (
    <form onSubmit={this.onSubmit1}>
        <div>
            <label>UserName :</label>
            <input type="text" value={this.state.username} onChange={this.handleusername}/>
        </div>
        <div>
            <label>comments :</label>
           <textarea value={this.state.comments} onChange={this.handlecommentschange}></textarea>
        </div>
        <div>
                    <label>Select:</label>
                    <select value={this.state.select} onChange={this.handleSelectChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>

        <button type="submit">Submit</button>
    </form>
    )
  }
}

export default formhandling