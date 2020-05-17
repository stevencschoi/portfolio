import React from "react";
import "../styles/About.scss";

export default function About() {
  return (
    <>
      <h1>My Values</h1>

      <article>
        <h2>Continuous Learning</h2>
        <p className="quote">
          "I have no special talent. I am only passionately curious" - Albert
          Einstein
        </p>
        <p>
          I love learning. At various stages in my life, I've learned to DJ,
          scuba dive and play piano to name a few things. Developing new skills
          and knowledge helps me gain perspective. I strive not for perfection,
          but for the experience and empathy to understand the world and people
          around me.
        </p>
      </article>
      <article>
        <h2>Embrace Challenge</h2>
        <p className="quote">
          “Difficulties strengthen the mind, as labor does the body.” - Seneca
        </p>
        <p>
          I have climbed mountains. Jumped out of planes, off bridges and
          cliffs. Left stable employment in search of greater meaning. I am
          stronger, more confident and appreciative of life having faced and
          overcome fear, challenge and adversity. This mentality keeps me
          motivated to work hard and accept any problem as an opportunity for
          growth.
        </p>
      </article>
      <article>
        <h2>Adaptability</h2>
        <p className="quote">
          When we are no longer able to change a situation, we are challenged to
          change ourselves.” - Viktor Frankl
        </p>
        <p>
          Change is inevitable. I strive to be adaptable - to be productive,
          dependable and happy regardless of external circumstances. I am
          grateful for the opportunity to pursue my passion for web development,
          and look forward to applying my knowledge and leveraging my experience
          to become the best developer I can be.
        </p>
      </article>
    </>
  );
}
