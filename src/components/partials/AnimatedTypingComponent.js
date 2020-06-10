import React from "react";
// import NavLink from "./NavLink";
import Typing from "react-typing-animation";

import "../../styles/partials/AnimatedTypingComponent.scss";

export default function AnimatedTypingComponent() {
  const delay = 1000;

  return (
    <div className="typewriter">
      <Typing speed={25}>
        <p>Hi, my name is Steven.</p>
        <Typing.Delay ms={delay} />
        <Typing.Backspace count={22} />
        <p>
          I am a <span className="span">web developer.</span>
        </p>
        <Typing.Delay ms={delay} />
        <span>
          I am <span className="passionate">passionate.</span>
        </span>
        <Typing.Delay ms={delay} />
        <Typing.Backspace count={11} />
        <span className="motivated">motivated.</span>
        <Typing.Delay ms={delay} />
        <Typing.Backspace count={10} />
        <span className="reliable">reliable.</span>
        <Typing.Delay ms={delay} />
      </Typing>
      <Typing speed={10}>
        <Typing.Delay ms={11000} />
        <p>
          Have a look around and if you have any questions,{" "}
          <a href="mailto:stevencschoi@gmail.com">let me know!</a>
        </p>
      </Typing>
    </div>
  );
}
