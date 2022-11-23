import React, { Component } from "react";
import { render } from 'react-dom';
import "./App.css";
import Dashboard from './components/dashboard.js';


class App extends Component{


  render() {
    return(
      <div className="App" style={{display: "flex", flexDirection: "column"}}>
        <div style={{borderRadius: "10px", display: "flex", justifyContent: "center", width: "100%", backgroundColor: "#E12301"}}>
          <h1 style={{color: "white"}}>Say Cheese!</h1>
        </div>
          <Dashboard />
      </div>
    );
  }
};

export default App;