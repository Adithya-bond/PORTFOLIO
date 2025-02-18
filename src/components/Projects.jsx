import React from 'react'
import "../styles/Projects.css"
import Portfolio from "../assets/portfolio.png"
import Todolist from "../assets/todolist.png"
import Ekart from "../assets/ekart.png"
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='projects'>
      <div className='project'>
        
            <img src={Todolist} alt="to do list" />
            <h4>TO_DO_LIST Web Application</h4>
            <a href="https://adithya-bond.github.io/TO_DO_LIST/" target="_blank">click here to visit</a>
       
      </div>
      <div className='project'>
        
            <img src={Ekart} alt="ekart" />
            <h4>E-KART an E-Commerce Web Application</h4>
            <a href="https://e-commerce-cte9.onrender.com" target="_blank">click here to visit</a>
    
      </div>
      <div className='project'>
        
            <img src={Portfolio} alt="personal portfolio" />
            <h3>Personal Portfolio</h3>
            {/* <a href="https://adithya-bond.github.io/TO_DO_LIST/" target="_blank">click here to visit</a> */}
        
      </div>
    </div>
  )
}

export default Projects
