import React from 'react'

const Value = (props) => {
  return (
    <article>
      <h3>{props.title[0]}
        <span className={props.title[1]}> {props.title[1]}</span>
      </h3>
      <p className="quote">
        <i>{props.quote}</i>
      </p>
      <p className="desc">{props.description}</p>
    </article>
  )
}

export default Value;
