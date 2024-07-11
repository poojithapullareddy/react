import React, { Component } from 'react';
import UserConsumer  from './context';

export class UseContext extends Component {
  render() {
    return (
      <UserConsumer>
        {
          (username) => (
            <div>Hello, {username}</div>
          )
        }
      </UserConsumer>
    );
  }
}

export default UseContext;
