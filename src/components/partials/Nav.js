import React from "react";
import "../../styles/Header.scss";
import NavLink from "../partials/NavLink";

export default function Nav() {
  return (
    <nav>
      <ul>
        <NavLink path="/">Home</NavLink>
        <NavLink path="/about">About</NavLink>
        <NavLink path="/projects">Projects</NavLink>
        <NavLink path="/inspiration">Inspiration</NavLink>
        <NavLink path="https://www.canva.com/design/DAD3-eaP9J8/mvI2wQ6QYyICoKOUsuWvlg/view?utm_content=DAD3-eaP9J8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
          Resume
        </NavLink>
        <NavLink path="https://thestevechoi.wordpress.com/">Blog</NavLink>
        <NavLink path="mailto:stevencschoi@gmail.com">Contact</NavLink>
      </ul>
    </nav>
  );
}
