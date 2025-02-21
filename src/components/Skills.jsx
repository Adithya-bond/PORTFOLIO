import React from 'react'
import '../styles/Skills.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.png'
import java from '../assets/java.png'
import bootstrap from '../assets/bootstrap.png'
const Skills = () => {
  return (
    <div className='skills' id='skillsnav'>
      <h1>Skills</h1>
      <div className="sk1">
        <div><img src={html} alt="" /></div>
        <div><img src={css} alt="" /></div>
        <div><img src={js} alt="" /></div>
        {/* //material ui - npm -  */}
        
      </div>
      <div className="sk2">
        <div><img src={react} alt="" /></div>
        <div><img src={node} alt="" /></div>
        <div><img src={express} alt="" /></div>
      </div>
      <div className="sk3">
        <div><img src={mongodb} alt="" /></div>
        <div><img src={java} alt="" /></div>
        <div><img src={bootstrap} alt="" /></div>
      </div>
    </div>
  )
}

export default Skills
