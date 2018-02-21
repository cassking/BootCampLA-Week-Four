import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="container">
      <div className="navbar">
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/goodbye'>Goodbye</Link>
        <Link className="link" to='/custom-greeting'>Custom greeting</Link>
      </div>
      <div className="content">
          {this.props.children}
      </div>

    </div>
    )
  }
}

export default NavBar;
