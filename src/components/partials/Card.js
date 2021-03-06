import React from 'react';
import { useDisplayData } from '../hooks/useDisplayData';

const Card = ({ obj }) => {
  const { displayData, displayModal, selectProject } = useDisplayData();
  return (
    <div className="card">
      <picture>
        <source srcSet={obj.webp} type="webp" />
        <img src={obj.pic} alt={obj.title} className={displayData.showModal ? 'card-img fade' : 'card-img'} />
      </picture>
      <div className="overlay">
        <div className="title-text">
          <h3>{obj.title}</h3>
          <ul className="languages">
            {obj.languages.map((language, index) => {
              return (
                <React.Fragment key={index}>
                  <li>{language}</li>
                </React.Fragment>
              );
            })}
          </ul>
          <div className="button-container">
            <button
              className="button-link"
              onClick={(e) => {
                e.preventDefault();
                selectProject(obj);
                displayModal();
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
