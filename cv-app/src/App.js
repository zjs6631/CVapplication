import logo from "./logo.svg";
import "./App.css";
import uniqid from "uniqid";
import React, { Component } from "react";
import ContactInfo from "./components/ContactInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contactFormShown: false,
      buttonText: "Edit",
    };

    this.editContact = this.editContact.bind(this);
  }

  editContact = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      contactFormShown: !prevState.contactFormShown,
    }));
    if (this.state.contactFormShown) {
      this.setState({
        buttonText: "Edit",
      });
    } else {
      this.setState({
        buttonText: "Save",
      });
    }
    console.log(this.state.contactFormShown);
  };

  render() {
    const { contactFormShown, buttonText } = this.state;
    return (
      <div>
        <ContactInfo formShown={this.state.contactFormShown} />
        <button id="editBtn" onClick={this.editContact}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}
export default App;
