import React, { Component } from "react";
import "./estilo.css";
class Cabecalho extends Component{
    render(){
        return(
           <section className="cabecalho">
               <h2 className="titulo-principal"> Luísa Reis Santos</h2>
                <div className="nav">
                    <a>Home</a>
                    <a>Contato</a>
                </div>
           </section>
        )
    }
}
export default Cabecalho