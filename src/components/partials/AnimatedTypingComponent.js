import React from "react";
// import NavLink from "./NavLink";
import Typing from "react-typing-animation";

import "../../styles/partials/AnimatedTypingComponent.scss";

export default function AnimatedTypingComponent() {
  const delay = 1000;
  const toType = ["passionate", "motivated", "reliable"];

  const typeWords = words => {
    const wordsToType = words.map((word, index) => {
      if (index === words.length - 1) {
        return (
          <>
            <span className={word}>{word}.</span>
            <Typing.Delay ms={delay} />
          </>
        );
      } else {
        return (
          <>
            <span className={word}>{word}.</span>
            <Typing.Delay ms={delay} />
            <Typing.Backspace count={word.length + 1} />
          </>
        );
      }
    });
    return wordsToType;
  };

  return (
    <div className="typewriter">
      <Typing speed={25}>
        <p>
          Hi, my name is <span className="name">Steven</span>.
        </p>
        <Typing.Delay ms={delay} />
        <Typing.Backspace count={22} />
        <p>
          I am a <span className="span">web developer.</span>
        </p>
        <div className="animated-text">
          <Typing.Delay ms={delay} />
          <p>I am</p>
          {typeWords(toType)}
        </div>
      </Typing>
      <Typing speed={8}>
        <Typing.Delay ms={11000} />
        <p>
          Have a look around and if you have any questions,{" "}
          <a href="mailto:stevencschoi@gmail.com">let me know!</a>
        </p>
      </Typing>
    </div>
  );
}
