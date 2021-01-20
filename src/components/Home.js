import React from "react";

import AnimatedTypingComponent from "./partials/AnimatedTypingComponent";
import About from './About';

const Home = () => {
  return (
    <>
      <div className="hero">
        {/* <div className="container"> */}
          <AnimatedTypingComponent />
        {/* </div> */}
      </div>
      <About />
    </>
  );
}

export default Home;
