// import React, { Component } from 'react';

// export class StateClass extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0
//         };

//         // Bind the increment method to the class instance
//         this.increment = this.increment.bind(this);
//     }

//     increment() {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }), () => {
//             console.log("Increment value: " + this.state.count);
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.increment}>Counter</button>
//                 <p>Count: {this.state.count}</p>
//             </div>
//         );
//     }
// }

// export default StateClass;

// import React, { Component } from 'react';

// export class StateClass extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0
//         };
//     }

//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         }, () => {
//             console.log("Increment value: " + this.state.count);
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.increment}>Counter</button>
//                 <p>Count: {this.state.count}</p>
//             </div>
//         );
//     }
// }

// export default StateClass;
import React, { Component } from 'react';

export class StateClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment ()  {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("Increment value: " + this.state.count);
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.increment.bind(this)}>Counter</button>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}

export default StateClass;
