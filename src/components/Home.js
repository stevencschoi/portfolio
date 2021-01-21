import React from "react";
import { HashLink } from 'react-router-hash-link';
// import AnimatedTypingComponent from "./partials/AnimatedTypingComponent";
import Values from './Values';
import Projects from './Projects';
import Modal from './partials/Modal';

import { useDisplayData } from './hooks/useDisplayData';

const Home = () => {
  const { displayData } = useDisplayData();
  return (
    <main>
      <div className="hero">
        {/* <div className="container"> */}
          {/* <AnimatedTypingComponent /> */}
          <h1>Hi, my name is <span className="name">Steven</span>.</h1>
          <p>I'm a <span>full-stack</span> web developer.</p>
          <div className="button-container">
            <button className="button-link">
              <HashLink aria-label={'projects'} to="#projects"
                scroll={el => el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}
              >
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
        {displayData.showModal && displayData.selectedProject && <Modal obj={displayData.selectedProject}/> }
      </div>
    </main>
  );
}

export default Home;
