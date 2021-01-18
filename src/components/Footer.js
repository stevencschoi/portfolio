import React from "react";
import { info } from '../models';
import NavLink from "./partials/NavLink";
import "../styles/Footer.scss";

export default function Footer() {
  const socialIcons = {
    github: 'fab fa-github',
    facebook: 'fab fa-facebook',
    instagram: 'fab fa-instagram-square',
    linkedin: 'fab fa-linkedin',
    twitter: 'fab fa-twitter'
  }

  return (
    <footer>
      {/*<div className="logo">
        <img src={info.logo} alt="company logo"></img>
      </div>*/}
      <div>
        <p>&#169; 2020 {info.company} </p>
      </div>
      <div>
        <ul className="social">
          {info.social.map((platform, index) => {
            return (
              <React.Fragment key={index}>
                <NavLink path={platform.link} target="_blank">
                  <i className={socialIcons[platform.name]}></i>
                </NavLink>
              </React.Fragment>
            )
          })}
        </ul>
      </div>
    </footer>
  );
}
