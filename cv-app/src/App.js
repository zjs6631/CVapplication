import logo from './logo.svg';
import './App.css';
import uniqid from "uniqid";
import React, {Component} from 'react';
import ContactInfo from './components/ContactInfo';


class App extends Component {
  constructor(){
    super();
    this.state = {
      contactInfo: {
        name: 'default',
        email: 'default',
        phone: 'default'
      },
    }
  }

  handleNameChange = (e) =>{
    this.setState({
      contactInfo:{
        name: e.target.value,
        email: this.state.contactInfo.email,
        phone: this.state.contactInfo.phone,
      }
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      contactInfo:{
        name: this.state.contactInfo.name,
        email: e.target.value,
        phone: this.state.contactInfo.phone,
      }
    });
  }

  handlePhoneChange = (e) => {
    this.setState({
      contactInfo:{
        name: this.state.contactInfo.name,
        email: this.state.contactInfo.email,
        phone: e.target.value,
      }
    })
  }

  onSubmitContact = (e) =>{
    e.preventDefault();
    this.setState({
      contactInfo: {
        name: this.contactInfo.name,
        email: this.contactInfo.email,
        phone: this.contactInfo.phone,
      }
    });
  }
  render(){
    const {contactInfo} = this.state;
    return (
      <div>
        <form id='contactInfoForm' onSubmit={this.onSubmitContact}>
          <label htmlFor='nameInput'>Enter name: </label>
          <input type='text' id='nameInput' onChange={this.handleNameChange} value={contactInfo.name} />
          <br></br><label htmlFor='emailInput'>Enter email: </label>
          <input type='text' id='emailInput' onChange={this.handleEmailChange} value={contactInfo.email}/>
          <br></br><label htmlFor='phoneInput'>Enter phone number: </label>
          <input type='text' id='phoneInput' onChange={this.handlePhoneChange} value={contactInfo.phone}/>
          <br></br><button type='submit'>submit contact</button>
          <br></br><button id='editBtn'>edit</button>
        </form>
        <ContactInfo contactInfo={contactInfo}/>
      </div>
    )
  }
}
export default App;
