import React from "react";
const classNames = require("classnames");

const NavLink = ({ name, path, target, children }) => {
  const linkClass = classNames({});
  return (
    <a href={path} target={target} aria-label={name}>
      <li className={linkClass}>{children}</li>
    </a>
  );
}

export default NavLink
