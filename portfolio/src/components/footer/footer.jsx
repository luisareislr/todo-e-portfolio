import React, { Component } from "react";
import "./estilo.css";
import {MarkGithubIcon} from '@primer/octicons-react'
class Footer extends Component {
  render() {
    return (
        <footer>
            
            <a href="https://www.linkedin.com/in/lu%C3%ADsa-reis-santos-583170209/"><i class="fab fa-linkedin-in fa-2x"></i></a>
            <a href="https://github.com/luisareis21"><MarkGithubIcon size={24}fill="black" /></a>
            <p class="rodape">Feito por: Luísa Reis - 2021</p>
        </footer>
        );
    }
}
export default Footer;