import React from 'react'

const Card = ({ obj, handler }) => {
  return (
    <div className="card" onClick={handler}>
      <picture>
        <source srcSet={obj.webp} type="webp"/>
        <img src={obj.pic} alt={obj.desc} className="card-img" />
      </picture>
    </div>
  )
}

export default Card;
