import React from "react";
import { HashLink } from 'react-router-hash-link';
import AnimatedTypingComponent from "./partials/AnimatedTypingComponent";
import Values from './Values';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <div className="hero">
        {/* <div className="container"> */}
          {/* <AnimatedTypingComponent /> */}
          <h1>Hello, I'm <span className="name">Steven Choi</span>.</h1>
          <p>I'm a full-stack web developer.</p>
          <div className="button-container">
            <button className="button-link">
              <HashLink smooth to="#values" scroll={el => el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}>
                View My Work {' '}
                <i className="fas fa-arrow-right"></i>
              </HashLink>
            </button>
          </div>
        {/* </div> */}
      </div>
      <div className="wrapper">
        <section id="values">
          <Values />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </>
  );
}

export default Home;
