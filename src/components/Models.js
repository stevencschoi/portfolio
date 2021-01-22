import React from 'react';
import Person from './partials/Person';

import { people } from '../models';

const Models = () => {
  return (
    <>
      <h2>Models</h2>
      <div className="gallery-wrap">
        {people.map((human, index) => {
          return (
            <React.Fragment key={index}>
              <Person person={human} />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Models;
