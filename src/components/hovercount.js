import React, { Component } from 'react';
// import Updatecomponent from './HOC';
export class HoverCount extends Component {
    
    

    render() {
        return (
            <div>
                {/* <Updatecomponent/> */}
                <h1 onMouseOver={this.props.handleCount1}> count: {this.props.count1}</h1>
            </div>
        );
    }
}

// export default Updatecomponent(HoverCount,10);
export default HoverCount