// import React, { Component } from 'react';

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef(); // Creating a ref
//   }

//   componentDidMount() {
//     // Accessing the DOM node
//     console.log(this.myRef.current);
//     this.myRef.current.focus(); // For example, setting focus on the input field
//   }

//   render() {
//     return (
//       <div>
//         <input ref={this.myRef} type="text" />
//       </div>
//     );
//   }
// }

// export default MyComponent;
import React, { Component } from 'react'

export class MyComponent extends Component {
    constructor(props) {
      super(props)
    
      this.myRef =React.createRef();
    }

    componentDidMount(){
        console.log(this.myRef.current);
        this.myRef.current.focus();
    }
    onclickhandle=()=>{
        alert(this.myRef.current.value);
    }
  render() {
    return (
      <div>
        <label>username</label>
        <input type="text" ref={this.myRef}></input>
        <button onClick={this.onclickhandle}>click</button>
      </div>
    )
  }
}

export default MyComponent