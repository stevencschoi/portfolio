import React from "react";
// import NavLink from "./NavLink";
import Typing from "react-typing-animation";

const AnimatedTypingComponent = () => {
  const delay = 1000;
  const toType = ["reliable", "passionate", "motivated"];

  const typeWords = words => {
    const wordsToType = words.map((word, index) => {
      if (index === words.length - 1) {
        return (
          <React.Fragment key={index}>
            <span className={word}>{word}.</span>
            <Typing.Delay ms={delay} />
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={index}>
            <span className={word}>{word}.</span>
            <Typing.Delay ms={delay} />
            <Typing.Backspace count={word.length + 1} />
          </React.Fragment>
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
        {/* <Typing.Backspace count={22} /> */}
        <p>
          I am a <span className="span">web developer.</span>
        </p>
        <div className="animated-text">
          <Typing.Delay ms={delay} />
          <p>I am {typeWords(toType)}</p>
        </div>
      </Typing>
      <Typing speed={15}>
        <Typing.Delay ms={9000} />
        <p>
          Enjoy your stay and feel free to{" "}
          <a href="mailto:stevencschoi@gmail.com">leave me a message!</a>
        </p>
      </Typing>
    </div>
  );
}

export default AnimatedTypingComponent;
