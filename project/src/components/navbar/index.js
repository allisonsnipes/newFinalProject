import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    // creating a navbar with home button, how to start and scoreboard
    <nav className='navbar sticky-top navbar-dark bg-dark'>
      <Link className='nav-item text-white' to='home'>Home </Link>
      <Link className='nav-item text-white' to='games'>Games </Link>
      <Link className='nav-item text-white' to='/'><h1>Game Meet! </h1></Link>
      <a className='nav-item text-white'>Log In</a>
      <a className='nav-item text-white'>Create Account</a>
    </nav>

  )
}

export default Navbar
