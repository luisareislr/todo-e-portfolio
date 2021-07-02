import React, { Component } from "react";
import "./estilo.css";
class MyHeader extends Component {
  render() {
    return (
        <a>{this.props.Nav}</a>
    );
  }
}

export default MyHeader;