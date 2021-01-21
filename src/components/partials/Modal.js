import React from 'react';
import { useDisplayData } from '../hooks/useDisplayData';

const Modal = ({ obj }) => {
  const { hideModal } = useDisplayData();
  return (
    <div className="modal-container" onClick={hideModal}>
      <div className="modal">
        <picture>
          <source srcSet={obj.webp} type="webp"/>
          <img src={obj.pic} alt={obj.desc} />
        </picture>
        <div className="bottom-modal">
          <div className="project-info">
            <h2>{obj.title}</h2>
            <p>{obj.desc}</p>
            <button>
              <a href={obj.url} aria-label={obj.title} target='_blank' rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
                View
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
