import React, {Component} from "react";
import App from "../App";


const ContactInfo = (props) => {
    const{contactInfo} = props;

    return(
        <div className="contactDiv">
            <h3>{contactInfo.name}</h3>
            <h3>{contactInfo.email}</h3>
            <h3>{contactInfo.phone}</h3>
            <br></br><button id='editBtn'>edit contact</button>
        </div>
    );
};

export default ContactInfo;

