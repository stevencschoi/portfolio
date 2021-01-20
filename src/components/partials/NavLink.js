import React from "react";
const classNames = require("classnames");

const NavLink = (props) => {
  const linkClass = classNames({});
  return (
    <a href={props.path} target={props.target}>
      <li className={linkClass}>{props.children}</li>
    </a>
  );
}

export default NavLink
