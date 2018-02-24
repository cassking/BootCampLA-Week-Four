import React from 'react';
import { Link } from 'react-router'

const NavBar = props => {
  return(
    <div>
      <div className="navbar">

        <Link to='/'>Blog home</Link>
      </div>
      <div className="content">
        <h1 className="page-title">artilces</h1>
        {/* The props.children line in NavBar.js allows us to render "children" components in addition to our ubiquitous nav bar. */}
        {props.children}
      </div>
    </div>
  )
}

export default NavBar;
