import React, { Component } from "react";
import "./estilo.css";
import image from "../../assets/image/image.png";

class Header extends Component {
  render() {
    return (
      <>
      <div className="menuItem">
          <a className="title" href="https://google.com">Luísa Reis Santos</a>
          <a className="item" href="https://google.com">Home</a>
          <a className="item" href="https://google.com">Contato</a>
          <p className="item" href="https://google.com">Portfólio</p>
      </div>
      <img className="image" src={image} alt="image" />
      </>
    );
  }
}

export default Header;