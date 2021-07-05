import React, { Component } from "react";
import "./estilo.css";
import image from "../../assets/image/image.png";

class Header extends Component {
  render() {
    
    return (
      <>
      <div className="menuItem">
          <a className="title" href=""> Luísa Reis Santos </a>
          <a className="item" href="">Home</a>
          <a className="item" href="">Contato</a>
          <p className="item">Portfólio</p>
      </div>
      <img className="image" src={image} alt="image" />
      </>
    );
  }
}

export default Header;