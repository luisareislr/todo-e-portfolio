import React, { Component } from "react";
import "./estilo.css";

class Conteudo extends Component {
    render() {
      return (
          <>
        <div class="accordionHeader">
            <h2>Sobre mim</h2>
        </div>
        <div class="accordionBody">
            <p>Meu nome é Luisa, sou estudante de Sistemas de Informação
            da Universidade de São Paulo. Gosto muito de tecnologia e programação e busco me 
            desenvolver na área que estudo, especialmente em Front-end. Sou uma pessoa determinada
            e, com foco e resiliência, busco atingir meus objetivos. Fora isso, meus hobbies
            favoritos são ouvir musica e ler :) </p>
        </div>
        <div class="accordionHeader">    
            <h2>Conquistas pessoais</h2>
        </div>
        <div class="accordionBody">
            <p>2º lugar - Programa Solução Tecnológicas KM-23 <br/>
            Treinamento de Design Thinking - KM-23 <br/>
            Mentoria de Design - Taqtile <br/></p>
        </div>
        </>
        )
    }
}
export default Conteudo