import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navcontainer'>
      <span className='logo'>I am booking</span>
      <div className='navbuttons'>
    <button className='navbutton'><Link to='/register' className='reg'>Register</Link></button>
        <button className='navbutton'><Link to='/Login' className='log'>Login</Link></button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
