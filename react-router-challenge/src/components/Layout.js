import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

const Layout = (props) => {
  console.log(props)
 return(
   <div>
     <BackButton />
      <br />
      <Link to='/'>Home</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/projects'>Projects</Link>
      <br />

     <h1 className="page-title text-center"> Jane Jupiter, Developer </h1>
     { props.children }
   </div>
 )
}

export default Layout;
