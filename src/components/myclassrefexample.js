import React, { Component } from 'react';

class Myclassrefexample extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusinput = () => {
        this.inputRef.current.focus(); 
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef} type="text" />
            </div>
        );
    }
}

export default Myclassrefexample;
