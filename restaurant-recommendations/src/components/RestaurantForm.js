import React, { Component } from 'react'

class RestaurantForm extends Component {
  constructor(props) {
  super(props)
  this.state = {
    name: '',
    description: ''

  }
  this.handleNameChange = this.handleNameChange.bind(this)
  this.handleRestaurantChange = this.handleRestaurantChange.bind(this)
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(event){
    console.log(event.target.value)
    let newName = event.target.value
    this.setState({
      name: newName
    })
  }

  handleRestaurantChange(event){
    console.log(event.target.value)
    let newDescription = event.target.value
    this.setState({
      description: newDescription
    })
  }
  handleFormSubmit(event){
    event.preventDefault();
    console.log('FORM SUBMITTED, this is state:', this.state);
    ///to create a new review set
    //sent some sort of submiisssion payload to app
    //and clear form for next submission
    //we are in RestaurantForm.js
    //
    let restaurantPayload = {
      restaurant_id: `${this.state.name.replace(" ","-")}-${this.state.description.substring(0,5)}`,
      name: this.state.name,
      description: this.state.description
    }
      // debugger
    this.props.handleAddRestaurantSubmit(restaurantPayload)
    console.log('payload',restaurantPayload)

  }
  render() {
  return (
    <div>
     <form  onSubmit={this.handleFormSubmit}>
        <label htmlFor={this.name}>Restaurant Name:
          <input
            name={this.name}
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
        />
        </label>
        <label htmlFor={this.content}>Description:
          <input
            name={this.description}
            type="text"
            value={this.state.description}
            onChange={this.handleRestaurantChange}
          />
        </label>

        <input type="submit" value="Add Restaurant" />
      </form>
    </div>
  )
}
}


export default RestaurantForm
