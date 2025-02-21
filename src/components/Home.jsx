import React from "react";
import { ReactTyped } from "react-typed";
import "../styles/Home.css";
import ninja from '../assets/ninja.png'

const Home = () => {
  return (
    <div className="home" id="homenav">
      <div class="hs1">
          {/* <h1>Welcome..!!</h1><br /> */}
          <h1>Hi, my name is <span id="name"><i>Adithya KC</i></span></h1><br />
          <h1>Am a </h1><br />
          <h1 id="typed"><i><ReactTyped
            strings={[
              "Passionate Front-End Developer",
              "Passionate React JS Developer",
              "Passionate Node JS Developer",
              "Passionate Back-End Developer",
              "Passionate MERN Developer"
              
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></ReactTyped></i></h1>
      </div>
      <div className="hs2">
        <img src={ninja} alt="desc" />
      </div>
    </div>
  );
};

export default Home;
