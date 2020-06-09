import React, { useContext } from "react";
import "../styles/Home.scss";
import { MyContext } from "../components/MyContext";

export default function Home() {
  const feature = useContext(MyContext);

  return (
    <div className="flex-container">
      <div className="feature-image">
        <img src={feature.image} />
      </div>
      <div className="feature">
        <h1>Steven Choi</h1>
        <h3>Non est ad astra mollis e terris via</h3>
      </div>
    </div>
  );
}
