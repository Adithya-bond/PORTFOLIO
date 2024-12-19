import React from 'react'
import '../styles/Experience.css'
import tekky from '../assets/tekkybench.png'

const Experience = () => {
  return (
    <div className='exp'>
      <h1>My Experience...</h1><br />
      <div className="exp1">
        <img src={tekky} alt="" /><br />
        <h2>Full Stack Web Development Intern</h2>
        <h4>(12-12-2024)</h4><br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus sit molestiae cupiditate non dignissimos doloremque, corrupti   exercitationem voluptatibus eos dolorum amet. Officia asperiores vitae iusto, hic alias est magnam illo aliquid quae, totam illum repudiandae saepe harum necessitatibus expedita culpa voluptas deleniti sunt repellendus deserunt ipsa repellat veritatis nulla? Aperiam!
        </p>
      </div>
    </div>
  )
}

export default Experience
