import React from "react";
import { HashLink } from 'react-router-hash-link';
import AnimatedTypingComponent from "./partials/AnimatedTypingComponent";
import About from './About';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <div className="hero">
        {/* <div className="container"> */}
          {/* <AnimatedTypingComponent /> */}
          <h1>Hello, I'm <span className="name">Steven Choi</span>.</h1>
          <h2>I'm a full-stack web developer.</h2>
          <div className="button-container">
            <button className="button-link">
              <HashLink smooth to="#about">
                View My Work {' '}
                <i className="fas fa-arrow-right"></i>
              </HashLink>
            </button>
          </div>
        {/* </div> */}
      </div>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}

export default Home;
