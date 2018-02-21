import React, { Component } from 'react';
import TextField from '../components/TextField';
import Select from '../components/Select';

/// TRY DOING THE EXTRA VALIDATION
class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      stateSelected:'',
      zip: '',
      phone: '',
      email: '',
      statesList: ["AK - Alaska",
                "AL - Alabama",
                "AR - Arkansas",
                "AS - American Samoa",
                "AZ - Arizona",
                "CA - California",
                "CO - Colorado",
                "CT - Connecticut",
                "DC - District of Columbia",
                "DE - Delaware",
                "FL - Florida",
                "GA - Georgia",
                "GU - Guam",
                "HI - Hawaii",
                "IA - Iowa",
                "ID - Idaho",
                "IL - Illinois",
                "IN - Indiana",
                "KS - Kansas",
                "KY - Kentucky",
                "LA - Louisiana",
                "MA - Massachusetts",
                "MD - Maryland",
                "ME - Maine",
                "MI - Michigan",
                "MN - Minnesota",
                "MO - Missouri",
                "MS - Mississippi",
                "MT - Montana",
                "NC - North Carolina",
                "ND - North Dakota",
                "NE - Nebraska",
                "NH - New Hampshire",
                "NJ - New Jersey",
                "NM - New Mexico",
                "NV - Nevada",
                "NY - New York",
                "OH - Ohio",
                "OK - Oklahoma",
                "OR - Oregon",
                "PA - Pennsylvania",
                "PR - Puerto Rico",
                "RI - Rhode Island",
                "SC - South Carolina",
                "SD - South Dakota",
                "TN - Tennessee",
                "TX - Texas",
                "UT - Utah",
                "VA - Virginia",
                "VI - Virgin Islands",
                "VT - Vermont",
                "WA - Washington",
                "WI - Wisconsin",
                "WV - West Virginia",
                "WY - Wyoming"
                    ],

    };

  this.handleFirstName = this.handleFirstName.bind(this);
  this.handleLastName = this.handleLastName.bind(this);
  this.handleAddress = this.handleAddress.bind(this);
  this.handleCity = this.handleCity.bind(this);
  this.handleStateSelection = this.handleStateSelection.bind(this);
  this.handleZip = this.handleZip.bind(this);
  this.handlePhone = this.handlePhone.bind(this);
  this.handleEmail = this.handleEmail.bind(this);

  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.validateFirstName = this.validateFirstName.bind(this);
  this.validateLastName = this.validateLastName.bind(this);
  this.validateAddress= this.validateAddress.bind(this);
  this.validateCity = this.validateCity.bind(this);
  this.validateStateSelection = this.validateStateSelection.bind(this);
  this.validateZip = this.validateZip.bind(this);
  this.validatePhone = this.validatePhone.bind(this);
  this.validateEmail = this.validateEmail.bind(this);

  }
  handleFirstName(event) {
    this.validateFirstName(event.target.value)
    this.setState({ firstName: event.target.value })
  }

  handleLastName(event) {
    this.validateLastName(event.target.value)
    this.setState({ lastName: event.target.value })
  }

  handleAddress(event) {
    this.validateAddress(event.target.value)
    this.setState({ address: event.target.value })
  }

  handleCity(event) {
    this.validateCity(event.target.value)
    this.setState({ city: event.target.value })
  }

  handleZip(event) {
    this.validateZip(event.target.value)
    this.setState({ zip: event.target.value })
  }

  handleStateSelection(event) {
    this.validateStateSelection(event.target.value)
    this.setState({ stateSelected: event.target.value })
  }

  handlePhone(event) {
    this.validatePhone(event.target.value)
    this.setState({ phone: event.target.value })
  }

  handleEmail(event) {
    this.validateEmail(event.target.value)
    this.setState({ email: event.target.value })
  }

  validateFirstName(firstName) {
    if (firstName === '') {
      let newError = { firstName: 'First name field may not be blank.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.firstName
      this.setState({ errors: errorState })
      return true
    }
  }

  validateLastName(lastName) {
    if (lastName === '') {
      let newError = { lastName: 'Last name field may not be blank.' }

      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.lastName
      this.setState({ errors: errorState })
      return true
    }
  }
  validateAddress(address) {
  }
  validateCity(city) {
  }
  ///begin validations below
  validateStateSelection(stateSelected) {
    if (stateSelected === '' ) {
      let newError = {stateSelected: 'You must select a state from list.' };
      this.setState({
        errors: Object.assign(this.state.errors, newError)
        });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.stateSelected;
      this.setState({ errors: errorState });
      return true;
    }
  }
  validateZip(zip) {
  }
  validatePhone(phone) {
  }
  validateEmail(email) {
  }

  handleFormSubmit(event){
    event.preventDefault();
    console.log('FORM SUBMITTED, this is state:', this.state);
    // if(
      this.validateStateSelection(this.state.state)
      this.validateFirstName(this.state.firstName)
      this.validateLastName(this.state.lastName)
    // ) {
    //   alert('errors:  ',this.state.errors)
    // }
    // debugger

  }

  render() {
    //put errors here NOT in return below
    let errorDiv;
    let errorItems;
      if (Object.keys(this.state.errors).length > 0) {
        errorItems = Object.values(this.state.errors).map(error => {
          return(<li key={error}>{error}</li>)
        })
        errorDiv = <div className="callout alert">{errorItems}</div>
      }
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
          onChange={this.handleFirstName}
        />
        <TextField
          type="text"
          label='Last Name:'
          name='last name'
          id='lastName'
          content={this.state.lastName}
          onChange={this.handleLastName}
        />
        <TextField
          type="text"
          label='Address:'
          name='address'
          id='address'
          content={this.state.address}
          onChange={this.handleAddress}
        />

        <TextField
          type="text"
          label='City:'
          name='city'
          id='city'
          content={this.state.city}
          onChange={this.handleCity}
        />
        <Select
          name='state'
          label='State'
          id='state'
          options={this.state.statesList}
          selectedOption={this.state.stateSelected}
          onChange={this.handleStateSelection}

        />
        <TextField
          type="text"
          label='Zipcode:'
          name='zip'
          id='zip'
          content={this.state.zip}
          onChange={this.handleZip}
        />
        <TextField
          type="text"
          label='Phone Number:'
          name='phone'
          id='phone'
          content={this.state.phone}
          onChange={this.handlePhone}
        />
        <TextField
          type="text"
          label='Email:'
          name='email'
          id='email'
          content={this.state.email}
          onChange={this.handleEmail}
        />
           show errors here:{errorDiv}
        <input type="submit" className="button" value="Submit "/>
      </form>
      <div>
      <h1>Information Being input:</h1>
        <p>
        Full name: {this.state.firstName} {this.state.lastName} <br />
        Address: {this.state.address}<br />
        City/State: {this.state.city}, {this.state.stateSelected}<br />
        Zipcode:{this.state.zip}<br />
        Phone: {this.state.phone}<br />
        Email: {this.state.email}
        </p>
      </div>


    </div>
    )

  }
}

export default FormContainer
