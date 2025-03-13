import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>HK-AniWatch!</h1>
        <ul className='nav-titles-container'>
            <NavLink to="/home" ><li className='nav-title'>Home</li></NavLink>
            <NavLink to="/about"><li className='nav-title'>About Us</li></NavLink>
            <NavLink to="/contact"><li className='nav-title'>Contact Us</li></NavLink>
        </ul> 
        <div className="btn">
            <button className='login-btn'>Login</button>
            <button className='signup-btn'>Sign Up</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
