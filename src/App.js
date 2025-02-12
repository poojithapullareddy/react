import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstClass from './components/firstClass';
import FirstFunc from './components/firstfunction';
import Parentcomponent from './components/parentcomponent';
import  Stateclass from './components/stateclass';
import Parentprobsmethod from './components/parentprobsmethod';
import Conditionalrendering from './components/conditionalrendering';
import Parentlist  from './components/parentlist';
import SimpleListIter from './components/simpleListIter' ;
import Inlinestyles from './components/inlinestyles';
import Formhandling from './components/formhandling';
import Mountinglifecyclemethod from './components/mountinglifecyclemethod';
import FragmentExample from './components/fragments'  ;
import FragmentExample1 from './components/FragmentExample';
import Parentcomp from './components/parentcomp';
import MyComponent from './components/myrefcomponent';
import Focusref from './components/focusref';
import App2 from './components/renderporatlmodel';
import Portal from './components/portal'
import ErrorHandlingnormal from './components/errorHandlingnormal';
import Errorboundary from './components/errorboundary';
import Hovercount from './components/hovercount';
import Renderprops from './components/Renderprops';
import UserProvider from './components/context';
import UseContext from './components/usecontext';
import HttpGET from './components/HttpGET';
import HttpPOST from './components/HttpPOST'; 
import { HttpDEL } from './components/HttpDel';
import Hook1 from './components/Hook1';
import Hook2 from './components/Hook2';
import Hook3 from './components/Hook3';
import Hook4 from './components/Hook4';
import Hook5 from './components/Hook5';
import Hook6 from './components/Hook6';
import HookFetch  from './components/HookFetch';
import HookFetchPar from './components/HookFetchPar';
function App() {
  const username = 'Pooja';
  return (
    <div className="App"> 
      {/* <FirstClass />
      <FirstFunc />
      <Parentcomponent/>
      <Stateclass/>
      < Parentprobsmethod/>
      <Conditionalrendering/>
      <SimpleListIter/>
      <Parentlist/>
      <Inlinestyles/>
      <Formhandling/>
      <Mountinglifecyclemethod/>
      <FragmentExample/>
      <FragmentExample1/> */}
      {/* <Parentcomp/> */}
      {/* <MyComponent/> */}
      {/* <Focusref/> */}
      {/* <App2/>
      <Portal/> */}
      {/* <Errorboundary>
      <ErrorHandlingnormal  name={"poojitha"}/>
      <ErrorHandlingnormal  name={"sravani"}/>
      </Errorboundary> */}
      {/* <Hovercount/> */}
      {/* <Renderprops render={(count, incrementedNumber) => (
        <Hovercount handleCount1={incrementedNumber} count1={count} />
      )} />

<UserProvider value={username}>
      <UseContext />
    </UserProvider> */}
    {/* <HttpGET/> */}
    {/* <HttpPOST/> */}
    {/* <HttpDEL/>
    <Hook1/> */}
    {/* <Hook2/>
    <Hook3></Hook3> */}
    {/* <Hook4/> */}
    {/* <Hook5/> */}
    {/* <Hook6/> */}
    {/* <HookFetch/> */}
    <HookFetchPar/>
    </div>
  );
}

export default App;
