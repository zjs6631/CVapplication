import React, { Component } from "react";
import App from "../App";
import NameHeader from "./NameHeader";

class ContactInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactInfo: {
        name: "Zachary Smith",
        email: "ZacharyJonesSmith@gmail.com",
        phone: "(910)-660-1677",
      },
    };
  }
  handleNameChange = (e) => {
    this.setState({
      contactInfo: {
        name: e.target.value,
        email: this.state.contactInfo.email,
        phone: this.state.contactInfo.phone,
      },
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      contactInfo: {
        name: this.state.contactInfo.name,
        email: e.target.value,
        phone: this.state.contactInfo.phone,
      },
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      contactInfo: {
        name: this.state.contactInfo.name,
        email: this.state.contactInfo.email,
        phone: e.target.value,
      },
    });
  };

  onSubmitContact = (e) => {
    e.preventDefault();
    this.setState({
      contactInfo: {
        name: this.contactInfo.name,
        email: this.contactInfo.email,
        phone: this.contactInfo.phone,
      },
    });
  };

  render() {
    const { contactInfo } = this.state;

    if (this.props.formShown) {
      return (
        <div id="contactDiv">
          <br></br>

          <form id="contactInfoForm" onSubmit={this.onSubmitContact}>
            <label htmlFor="nameInput">Enter name: </label>
            <input
              type="text"
              id="nameInput"
              onChange={this.handleNameChange}
              value={contactInfo.name}
            />
            <br></br>
            <label htmlFor="emailInput">Enter email: </label>
            <input
              type="text"
              id="emailInput"
              onChange={this.handleEmailChange}
              value={contactInfo.email}
            />
            <br></br>
            <label htmlFor="phoneInput">Enter phone number: </label>
            <input
              type="text"
              id="phoneInput"
              onChange={this.handlePhoneChange}
              value={contactInfo.phone}
            />
            <br></br>
          </form>
        </div>
      );
    } else {
      return (
        <div id="contactDiv">
          <div id="contactHeader">
          <p>Contact</p>
          </div>
          <p className="contactHeader">Name</p>
          <p id="contactName">{contactInfo.name}</p>
          <p className="contactHeader">Email</p>
          <p id="contactEmail">{contactInfo.email}</p>
          <p className="contactHeader">Phone</p>
          <p id="contactPhone">{contactInfo.phone}</p>
        </div>
      );
    }
  }
}

export default ContactInfo;
