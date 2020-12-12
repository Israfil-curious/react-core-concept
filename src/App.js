import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );

  function Person() {
    return (
      <div style={{border: "2px solid orange", padding: "10px", margin: "20px"}}>
        <h1>Hello World!</h1>
        <h2>I'm a programmer</h2>
      </div>
    )
  }
}

export default App;
