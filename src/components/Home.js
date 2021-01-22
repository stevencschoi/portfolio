import React from "react";
import { HashLink } from 'react-router-hash-link';
// import AnimatedTypingComponent from "./partials/AnimatedTypingComponent";
import Values from './Values';
import Inspiration from './Inspiration';
import Projects from './Projects';
import Nav from './partials/Nav';
import Modal from './partials/Modal';

import { useDisplayData } from './hooks/useDisplayData';

const Home = () => {
  const { displayData, toggleNav, closeNav } = useDisplayData();

  return (
    <main onClick={closeNav}>
      {/* //***** show mobile hamburger nav ***** */}
      <button
        aria-label="show nav"
        className={displayData.showNav ? 'hamburger-btn active' : 'hamburger-btn'}
        onClick={(e) => {
          e.stopPropagation();
          toggleNav();
        }}
      >
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </button>
      <Nav navClass={displayData.showNav ? 'active' : null} />
      <div className="hero">
        {/* <div className="container"> */}
          {/* <AnimatedTypingComponent /> */}
        <h1>Hi, my name is <span className="name">Steven</span>.</h1>
        <p>I'm a <span>full-stack</span> web developer.</p>
        <div className="button-container">
          <button className="button-link">
            <HashLink aria-label={'projects'} to="#projects"
              scroll={el => el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}
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
        <section id="inspiration">
          <Inspiration />
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
