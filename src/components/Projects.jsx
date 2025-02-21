import React from 'react'
import "../styles/Projects.css"
import Portfolio from "../assets/personalportfolio.jpg"
import Todolist from "../assets/todolist.jpeg"
import Ekart from "../assets/ekart.webp"
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='projects' id='projectsnav'>
     
      <a href="https://adithya-bond.github.io/TO_DO_LIST/" target='_blank'>
        <div class="card1" >
          <div class="front" id='card1'>
            <div className='blur'>
              <h3>To-Do-List</h3>
              {/* <img src={Todolist} alt="to do list" /> */}
            </div>
          </div>
          <div class="back">
            <p>
              This app allows users to add tasks, mark as complete with a tick symbol, and delete tasks. Tasks marked as completed are visually distinguished with a strikethrough. The application features a clean, responsive design with interactive elements for a seamless user experience. Demonstrated proficiency in DOM manipulation, event handling, and front-end web development.
            </p>
          </div>
        </div>
      </a>
      
      
      <a href="https://portfolio-67c1.onrender.com" target='_blank'>
        <div class="card2" >
          <div class="front" id='card2'>
            <div className="blur">
              <h3>Portfolio</h3>
            </div>
          </div>
          <div class="back">
            <p>
              This website includes sections such as "About Me",  "Skills",  "Projects",  and "Contact". Implemented modern design principles, smooth navigation, and dynamic content rendering. Demonstrates proficiency in React.js, component-based architecture, and responsive web design.
            </p>
          </div>
        </div>
      </a>
      <a href="https://e-commerce-cte9.onrender.com" target='_blank'>
        <div class="card3" >
          <div class="front" id='card3'>
            <div className="blur">
              <h3>E-Kart</h3>
              {/* <img src={Ekart} alt="e-kart" /> */}
            </div>
          </div>
          <div class="back">
            <p>
              Developed a React.js based e-commerce platform with distinct user and admin sections. Admins can manage products using full CRUD operations, while users can browse and purchase products. Integrated JSON Server for data storage and authentication, enabling secure user and admin login. Features include account creation, role-based access, and a dynamic product catalog. Demonstrates expertise in front-end development, backend integration, and authentication systems.
            </p>
          </div>
        </div>
      </a>
      
      

    </div>
  )
}

export default Projects
