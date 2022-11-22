import React, { Component } from "react";
import { render } from 'react-dom';
import "./App.css";
import Dashboard from './components/dashboard.js';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Brewhaha<span>☕️</span> </h1>
        <Dashboard />
      </div>
    );
  }
}

export default App;