import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton'

const NavBar = props => {
  return(
    <div>
      <div className="navbar">
        <BackButton />
        <Link to='/'>All Cereals HOME</Link>
      </div>
      <div className="content">
        <h1 className="page-title">Cereals</h1>
        {/* The props.children line in NavBar.js allows us to render "children" components in addition to our ubiquitous nav bar. */}
        {props.children}
      </div>
    </div>
  )
}

export default NavBar;
