import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

  return(

<nav>
  <Link to="/home">Home</Link> | 
  <Link to="/products">Products</Link> | 
  <Link to="/services">Services</Link> | 
  <Link to="/about">About</Link>
</nav>

  )

};


export default Navbar;

