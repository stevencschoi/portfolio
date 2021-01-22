import React from 'react';
import { projects } from '../models';
import { useDisplayData } from './hooks/useDisplayData';

import Modal from './partials/Modal'; //!using React.lazy triggers a scroll to top of app, regular import Modal
const Card = React.lazy(() => import('./partials/Card'));
const Fade = React.lazy(() => import('./Fade.js'));

const Projects = () => {
  const { displayData } = useDisplayData();
  return (
    <>
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <Card obj={project} />
            </React.Fragment>
          );
        })}
      </div>
      <Fade show={displayData.showModal}>
        <Modal obj={displayData.selectedProject} />
      </Fade>
    </>
  );
};

export default Projects;
