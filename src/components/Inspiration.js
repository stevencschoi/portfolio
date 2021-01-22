import React, { useState } from 'react';
import Person from './partials/Person';

import { inspiration } from '../models';

const Inspiration = () => {
  const [grayscale, setGrayscale] = useState(true);

  const addColour = () => {
    setGrayscale(false);
  };

  const removeColour = () => {
    setGrayscale(true);
  };

  return (
    <>
      <h2>Inspiration</h2>
      <div className="gallery-wrap">
        {/*{ inspiration.map((human, index) => {
          return (
            <React.Fragment key={index}>
              <Person person={human}/>
            </React.Fragment>
          )
        })}*/}
        <div
          className={grayscale ? 'grayscale item item-1' : 'item item-1'}
          onMouseEnter={addColour}
          onMouseLeave={removeColour}
        ></div>
        <div className="item item-2"></div>
        <div className="item item-3"></div>
        <div className="item item-4"></div>
        <div className="item item-5"></div>
      </div>
    </>
  );
};

export default Inspiration;
