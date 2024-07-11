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
      )} /> */}

<UserProvider value={username}>
      <UseContext />
    </UserProvider>
    </div>
  );
}

export default App;
