import React from 'react'

const Value = ({ title, quote, description }) => {
  return (
    <article>
      <h3>{title[0]}
        <span className={title[1]}> {title[1]}</span>
      </h3>
      <p className="quote">
        <i>{quote}</i>
      </p>
      <p className="desc">{description}</p>
    </article>
  )
}

export default Value;
