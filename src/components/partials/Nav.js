import React from "react";
import { NavHashLink } from 'react-router-hash-link';

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavHashLink smooth to="#">Home</NavHashLink>
        <NavHashLink to="/#values"
          scroll={el => el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}
        >Values</NavHashLink>
        <NavHashLink to="/#projects"
          scroll={el => el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}
        >Projects</NavHashLink>
        {/*<NavLink path="/inspiration">Inspiration</NavLink>*/}
        <a
          href="https://www.canva.com/design/DAD3-eaP9J8/mvI2wQ6QYyICoKOUsuWvlg/view?utm_content=DAD3-eaP9J8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a href="https://thestevechoi.wordpress.com/" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
        <a href="mailto:stevencschoi@gmail.com">Contact</a>
      </ul>
    </nav>
  );
}

export default Nav;