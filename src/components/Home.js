import React from 'react';
import { HashLink } from 'react-router-hash-link';
// import AnimatedTypingComponent from "./partials/AnimatedTypingComponent";
// import FadeInSection from './FadeInSection';
// import Values from './Values';
// import Models from './Models';
// import Projects from './Projects';
// import Modal from './partials/Modal';

import { useDisplayData } from './hooks/useDisplayData';

import Nav from './partials/Nav';
// const Nav = React.lazy(() => import('./partials/Nav'));
const FadeInSection = React.lazy(() => import('./FadeInSection'));
const Values = React.lazy(() => import('./Values'));
const Models = React.lazy(() => import('./Models'));
const Projects = React.lazy(() => import('./Projects'));
const Modal = React.lazy(() => import('./partials/Modal'));

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
        <h1>
          Hi, my name is <span className="name">Steven</span>.
        </h1>
        <p>
          I'm a <span>full-stack</span> web developer.
        </p>
        <div className="button-container">
          <button className="button-link">
            <HashLink
              aria-label={'projects'}
              to="#projects"
              scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}
            >
              View My Work <i className="fas fa-arrow-right"></i>
            </HashLink>
          </button>
        </div>
        {/* </div> */}
      </div>
      <React.Suspense fallback={<p>Loading...</p>}>
        <div className="wrapper">
          <FadeInSection name="values">
            <Values />
          </FadeInSection>
          <FadeInSection name="models">
            <Models />
          </FadeInSection>
          <FadeInSection name="projects">
            <Projects />
          </FadeInSection>
          {displayData.showModal && displayData.selectedProject && <Modal obj={displayData.selectedProject} />}
        </div>
      </React.Suspense>
    </main>
  );
};

export default Home;
