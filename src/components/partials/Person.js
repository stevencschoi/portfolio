import React from 'react';

const Person = ({ person }) => {
  const personClass = `${person.name[person.name.length-1].toLowerCase()}`;

  const name = person.name.map((word, index) => {
    if (index === word.length -1) {
      return word
    } else {
      return `${word} `
    }
  });

  return (
    <article
      className={`item ${personClass}`}
      aria-label={name.toString().replace(',', '')}
    >
      <div className={`person-overlay ${personClass}`}>
        <p>{person.desc}</p>
      </div>
    </article>
  )
}

export default Person;
