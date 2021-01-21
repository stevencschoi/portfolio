import React from 'react'

const Card = ({ obj, handler }) => {
  return (
    <div className="card" onClick={handler}>
      <picture>
        <source srcSet={obj.webp} type="webp"/>
        <img src={obj.pic} alt={obj.desc} className="card-img" />
      </picture>
      <div className="overlay">
        <div className="title-text">
          <h3>{obj.title}</h3>
          <ul className="languages">
            {obj.languages.map((language, index) => {
              return (
                <React.Fragment key={index}>
                  <li>{language}</li>
                </React.Fragment>)
            })}
          </ul>
          <div className="button-container">
            <button className="button-link">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
