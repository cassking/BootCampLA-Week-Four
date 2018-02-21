import React, { Component } from 'react'
import TextField from '../components/TextField'
import AddressList from '../components/AddressList'



class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addresses:[],
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: '',
    }
    this.handleChange = this.handleChange.bind(this)//track event.target.value
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleChange(event){
    console.log(
      'event.target.value:',event.target.value, 'event.target.type:',event.target.type,
      'event.target.name:',event.target.name,
      'event.target.id:',event.target.id)
      //how to set state by event.target attributes
      //i set id to be same as initialState string eg: newName
      ///want to use as initial state for all
      //answer here
      //https://stackoverflow.com/questions/29777058/how-to-setstate-by-value-in-react
      //Update: Thanks to @FakeRainBrigand for providing the ES6 syntax that allows the code reduction:
      // setState({[name]: value});
      //returnObj[this.target.id] = this.target.value;
      let name = event.target.id
      let value = event.target.value
      this.setState({[name]: value})
      let newAddresses = this.state.addresses.concat([{[name]: value}])
      console.log('new list', this.newAddresses)
      this.setState({addresses: newAddresses})

    }
  handleFormSubmit(event){

    event.preventDefault()
    // console.log('FORM SUBMITTED, this is state:', this.state)
    console.log('addresses', this.state.addresses[0])
  }


  render() {


    return (
      <div>
      <form onSubmit={this.handleFormSubmit} className="callout" id="shipping-address-form">
        <h1>Shipping Address</h1>
        <TextField
          type="text"
          label='First Name:'
          name='first name'
          id='firstName'
          content={this.state.firstName}
          onChange={this.handleChange}
        />
        <TextField
          type="text"
          label='Last Name:'
          name='last name'
          id='lastName'
          content={this.state.lastName}
          onChange={this.handleChange}
        />
        <TextField
          type="text"
          label='Address:'
          name='address'
          id='address'
          content={this.state.address}
          onChange={this.handleChange}
        />
        <TextField
          type="text"
          label='City:'
          name='city'
          id='city'
          content={this.state.city}
          onChange={this.handleChange}
        />
        <TextField
          type="text"
          label='State:'
          name='state'
          id='state'
          content={this.state.state}
          onChange={this.handleChange}
        />
        <TextField
          type="text"
          label='Zipcode:'
          name='zip'
          id='zip'
          content={this.state.zip}
          onChange={this.handleChange}
        />
        <TextField
          type="text"
          label='Phone Number:'
          name='phone'
          id='phone'
          content={this.state.phone}
          onChange={this.handleChange}
        />
        <TextField
          type="text"
          label='Email:'
          name='email'
          id='email'
          content={this.state.email}
          onChange={this.handleChange}
        />
        <input type="submit" className="button" value="Submit "/>
      </form>
      <div>
      <AddressList />
      </div>

    </div>
    )

  }
}

export default FormContainer
