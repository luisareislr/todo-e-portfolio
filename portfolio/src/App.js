import React, { Component } from "react";
import './assets/App.css';
import './assets/index.css';
import './components/Header/Header';
import MyHeader from "./components/Header/Header";

class App extends Component{
  render(){
    return(
      <div className="Header">
        <h1>Luísa Reis</h1>
        <MyHeader Nav="Home"/>
        <MyHeader Nav="Contato"/>
      </div>
    )
  }
}

export default App;