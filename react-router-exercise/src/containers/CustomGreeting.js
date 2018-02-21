import React, { Component } from 'react';
import Form from '../components/Form';

class CustomGreeting extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      type: "greeting",
      greeting:'',
      greetings:[]
      // greetingsList:[]
    };
    // Refactor the CustomGreeting component so that it saves greetings to state and can allow for multiple people to be greeted on the page.
    this.handleName = this.handleName.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleGreetings = this.handleGreetings.bind(this);
    this.clearForm = this.clearForm.bind(this);

  }

  handleName(event){
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  handleType(event){
    let newType = event.target.value;
    this.setState({ type: newType });

  }
  handleGreetings(event){
    event.preventDefault();
    console.log('FORM SUBMITTED, this is state:', this.state);
  let message;
  if (this.state.type === "greeting"){
    message = "Hello my friend ";
  } else {
    message = "Goodbye my friend ";
  }
  message = message + this.state.name;
  this.state.greetings.push(message);
  console.log(this.state.greetings);
  let greetingsList=[]
  this.state.greetings.map( (greeting) => {
    greetingsList.push(greeting)
    return(
        <li>{greeting}</li>
      )
    });
      console.log(greetingsList);
  }

  clearForm() {
      this.setState({
        name: "",
        greetings:[],
        greeting:''
      });
    }



  render(){

    let message;
    if (this.state.type === "greeting"){
      message = "Hello my friend ";
    } else {
      message = "Goodbye my friend ";
    }

    return(
      <div>
      <ul>List here:{ this.greetingsList}</ul>
        <h1>Custom Greeting Generator</h1>
        <Form
        handleGreetings={this.handleGreetings}
        handleType={this.handleType}
        handleName={this.handleName}
        />
        <p>{message}{this.state.name}</p>
      </div>
    )
  }
}

export default CustomGreeting;
