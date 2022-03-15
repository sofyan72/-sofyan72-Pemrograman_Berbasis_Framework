import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'; 
import React, {Component} from 'react';
import HelloComponent from './HelloComponent';
import Test from './LifecycleComponent';
import FormLogin from './formLogin';

function App() {
  return (
    <div class="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Halo Dunia!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div class="praktikum">
        <HelloComponent/>
        <Test/>
      </div>
      <div>
        <FormLogin/>
      </div>
    </div>
  );
}

export default App;