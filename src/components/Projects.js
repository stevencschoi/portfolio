import React from "react";
import { projects } from '../models';
import Card from './partials/Card';

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="projects">
        { projects.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <Card obj={project}/>
            </React.Fragment>
          )
        })}
      </div>
    </>
  );
}

export default Projects;