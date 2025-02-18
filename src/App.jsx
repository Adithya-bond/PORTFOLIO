import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Error from './components/Error';
import Projects from './components/Projects';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/* <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Experience/>
     <Contact/> */}
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/experience' element={<Experience/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
