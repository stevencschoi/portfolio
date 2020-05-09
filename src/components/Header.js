import React from "react";
import Nav from "./partials/Nav";
import "../styles/Header.scss";

export default function Header(props) {
  return (
    <header>
      {/*<div className="logo">
        <img src={props.logo} alt="company logo"></img>
  </div>*/}
      <div>
        <Nav />
      </div>
    </header>
  );
}
