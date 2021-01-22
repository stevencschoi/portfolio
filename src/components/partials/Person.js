import React from 'react'

const Person = ({ person }) => {
  const name = person.name.map((word, index) => {
    if (index === word.length -1) {
      return word
    } else {
      return `${word} `
    }
  });

  return (
    <article className={`item ${person.name[person.name.length-1].toLowerCase()}`}>
      <picture>
        <source srcSet={person.webp} type='image/webp' />
        <img src={person.pic} alt={name.toString().replace(',', '')} />
      </picture>
      <p>{person.desc}</p>
    </article>
  )
}

export default Person;
