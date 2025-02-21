import React from 'react'
import {Link} from 'react-scroll'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <div className='sec1'>
        <h1>ADITHYA KC</h1> 
      </div> */}
      <div className='sec2'>
        <ul>
            {/* <li ><h1 id='home'>Home</h1></li>  */}
            <Link to={"homenav"}><h1 id='home'>Home</h1></Link>
            {/* <li><h1 id='about'>About</h1></li> */}
            <Link to={'aboutnav'}><h1 id='about'>About</h1></Link>
            {/* <li><h1 id='skills'>Skills</h1></li> */}
            <Link to={'skillsnav'}><h1 id='skills'>Skills</h1></Link>
            <Link to={'projectsnav'}><h1 id='proj'>Projects</h1></Link>

            {/* <li ><h1 id='exp'>Experience</h1></li> */}
            <Link to={'experiencenav'}><h1 id='exp'>Experience</h1></Link>
            {/* <li ><h1 id='con'>Contact</h1></li> */}
            <Link to={'contactnav'}><h1 id='con'>Contact</h1></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
