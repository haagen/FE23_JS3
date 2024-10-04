import logo from './logo.svg';
import './App.css';
import React from 'react';

function App(props) {

  // return (
  //   <div className="App">
  //     <h1>Hello {props.greeting}</h1>
  //   </div>
  // );

  const propsObject = {
    className: "App"
  };

  return React.createElement("div", propsObject, 
    React.createElement("h1", null, "Hello " + props.greeting)
  );

}

export default App;
