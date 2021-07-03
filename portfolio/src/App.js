import React, { Component } from "react";
import './assets/App.css';
import './assets/index.css';
import Header from "./components/header/header";
import Conteudo from './components/conteudo/conteudo';
class App extends Component{
  render(){
    return(
      <>
        <Header />
        <Conteudo />
      </>
    )
  }
}

export default App;