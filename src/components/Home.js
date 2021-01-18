import React from "react";
import { info } from '../models';
import "../styles/Home.scss";

import AnimatedTypingComponent from "./partials/AnimatedTypingComponent";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="flex-container">
        <div className="feature-image">
          <img src={info.image} alt="Steven headshot" />
        </div>
        <div className="feature">
          <h1>Steven Choi</h1>
          <h3>Non est ad astra mollis e terris via</h3>
        </div>
      </div>
      <AnimatedTypingComponent />
    </main>
  );
}
