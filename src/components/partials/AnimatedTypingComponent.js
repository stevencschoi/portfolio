import React from "react";
// import NavLink from "./NavLink";
import Typing from "react-typing-animation";

import "../../styles/partials/AnimatedTypingComponent.scss";

export default function AnimatedTypingComponent() {
  const delay = 1000;

  return (
    <Typing>
      <div className="typewriter">
        <p>Hi, my name is Steven.</p>
        <Typing.Delay ms={delay} />
        <Typing.Backspace count={22} />
        <p>
          I am a <strong>web developer.</strong>
        </p>
        <Typing.Delay ms={delay} />
        <span>
          I am <span className="passionate">passionate.</span>
        </span>
        <Typing.Delay ms={delay} />
        <Typing.Backspace count={11} />
        <span className="curious">curious.</span>
        <Typing.Delay ms={delay} />
        <Typing.Backspace count={8} />
        <span className="motivated">motivated.</span>
        <Typing.Delay ms={delay} />
        <p>
          Have a look around and if you have any questions,{" "}
          <a href="mailto:stevencschoi@gmail.com">let me know!</a>
        </p>
      </div>
    </Typing>
  );
}
