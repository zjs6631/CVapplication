import React, { Component } from "react";
import App from "../App";
import ContactInfo from "./ContactInfo";


class NameHeader extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    
    return <div><h1 className="headerName">Zachary Smith</h1>
               <p className="headerDescription">This is a CV template created using React Components.<br></br>
               The + and ... at the top left can be used to add education and experience. <br></br>
               The ... in the Contact section can be used to edit contact information.</p>
            </div>;
  }
}

export default NameHeader;
