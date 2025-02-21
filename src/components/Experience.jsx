import React from 'react'
import '../styles/Experience.css'
import tekky from '../assets/tekkybench.png'

const Experience = () => {
  return (
    <div className='exp' id='experiencenav'>
      <h3>My Experience</h3><br />
      <div className="exp1">
        <img src={tekky} alt="" />
        <h2>Full Stack Web Development Intern</h2>
        <h4>(30-09-2023)</h4>
        <p>I worked as an intern, contributing to the development of frontend UI components for an event management website using React.js. My responsibilities included designing and implementing navigation bars, authorization pages, and the about page to enhance user experience. I collaborated with the team to ensure responsive and visually appealing designs. Through this experience, I improved my skills in React.js, component-based architecture, and UI/UX principles. This internship provided me with valuable hands-on experience in frontend development and teamwork.
        </p>
      </div>
    </div>
  )
}

export default Experience
