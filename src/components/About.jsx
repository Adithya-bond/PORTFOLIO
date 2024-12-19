import React from 'react'
import "../styles/About.css"
import alvas from '../assets/alvas.png'
import jnnce from '../assets/jnnce.png'
const About = () => {
  return (
    <div className='about'>
      
      <div className='sslc'>
        <img src={alvas} alt="" /><br />
        <h5>Alvas's English Medium High School</h5><br />
        <h5>Year Of Passing(2016)</h5><br />
        <h5>Syllabus: State</h5><br />
        <h5>Aggregate: 87%</h5>
        
      </div>
      <div className='puc'>
        <img src={alvas} alt="" /><br />
        <h5>Alvas's PU College</h5><br />
        <h5>Year Of Passing(2018)</h5><br />
        <h5>Syllabus: State</h5><br />
        <h5>Aggregate: 73%</h5>
        
      </div>
      <div className='be'>
        <img src={jnnce} alt="" /><br />
        <h5>Jawaharlal Nehru National College Of Engineering</h5><br />
        <h5>Year Of Passing(2024)</h5><br />
        <h5>Stream: BE(CSE)</h5><br />
        <h5>Aggregate: 65%</h5>
        
      </div>
    </div>
  )
}

export default About
