import React, { Component } from "react";
import App from "../App";
import ContactInfo from "./ContactInfo";


class NameHeader extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    
    return <h1 className="headerName">Zachary Smith</h1>;
  }
}

export default NameHeader;
