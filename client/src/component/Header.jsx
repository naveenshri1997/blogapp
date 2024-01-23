import React from 'react'
import logo from '../bloglogo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <nav class="cus-navbar navbar navbar-expand-lg navbar-light">
  <div class="container-fluid justify-content-start">
    <a class="navbar-brand" href="#"><img width="30px" src={logo} /></a>
    
    <div>      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />       
      </form>
       <NavLink className="nav-link" to="adminlogin">Admin Login</NavLink>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
