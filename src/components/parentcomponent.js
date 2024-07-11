import React from 'react';
import ChildComponent from './childcomponent';

export default function ParentComponent() {
    function handleclcik(){
        return console.log("handleclcik");
    }
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent id="childcomponent from parent" onclick={handleclcik}/>
    </div>
  );
}

