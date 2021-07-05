import React, { Component, useState } from "react";
import './assets/App.css';
import './assets/index.css';
import Header from "./components/header/header";
import Footer from './components/footer/footer';
import Accordion from "./components/conteudo/accordion";
class App extends Component{
  render(){
    return(
      <>
        <Header />
        <Accordion
        title="Sobre mim"
        content="Meu nome é Luisa, sou estudante de Sistemas de Informação
        da Universidade de São Paulo. Gosto muito de tecnologia e programação e busco me 
        desenvolver na área que estudo, especialmente em Front-end. Sou uma pessoa determinada
        e, com foco e resiliência, busco atingir meus objetivos. Fora isso, meus hobbies
        favoritos são ouvir musica e ler :)"/>
       <Accordion
       title="Conquistas pessoais"
       content="Fiquei em 2º lugar no Programa Solução Tecnológicas KM-23 em 2019, quando realizei um treinamento de Design Thinking durante o processo. No começo de 2020, participei de uma mentoria de Design - Taqtile"/>
        <Footer />
      </>
    )
  }
}
export default App;