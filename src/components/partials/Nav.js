import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import { useDisplayData } from '../hooks/useDisplayData';

const Nav = ({ navClass }) => {
  const { toggleNav } = useDisplayData();
  return (
    <nav className={navClass}>
      <ul onClick={toggleNav}>
        <NavHashLink aria-label={'home'} smooth to="#">Home</NavHashLink>
        <NavHashLink aria-label={'values'} to="/#values"
          scroll={el => el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}
        >Values</NavHashLink>
        <NavHashLink aria-label={'projects'} to="/#projects"
          scroll={el => el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}
        >Projects</NavHashLink>
        {/*<NavLink path="/inspiration">Inspiration</NavLink>*/}
        <a
          aria-label={`Steven Choi's resume`}
          href="https://www.canva.com/design/DAD3-eaP9J8/mvI2wQ6QYyICoKOUsuWvlg/view?utm_content=DAD3-eaP9J8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a aria-label={'blog'} href="https://thestevechoi.wordpress.com/" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
        <a aria-label={'email Steven'} href="mailto:stevencschoi@gmail.com">Contact</a>
      </ul>
    </nav>
  );
}

export default Nav;