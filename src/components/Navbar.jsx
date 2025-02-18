import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='sec1'>
        <h1>ADITHYA KC</h1> 
      </div>
      <div className='sec2'>
        <ul>
            {/* <li ><h1 id='home'>Home</h1></li>  */}
            <Link to={'/'}><h1 id='home'>Home</h1></Link>
            {/* <li><h1 id='about'>About</h1></li> */}
            <Link to={'/about'}><h1 id='about'>About</h1></Link>
            {/* <li><h1 id='skills'>Skills</h1></li> */}
            <Link to={'/skills'}><h1 id='skills'>Skills</h1></Link>
            <Link to={'/projects'}><h1 id='proj'>Projects</h1></Link>

            {/* <li ><h1 id='exp'>Experience</h1></li> */}
            <Link to={'/experience'}><h1 id='exp'>Experience</h1></Link>
            {/* <li ><h1 id='con'>Contact</h1></li> */}
            <Link to={'/contact'}><h1 id='con'>Contact</h1></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
