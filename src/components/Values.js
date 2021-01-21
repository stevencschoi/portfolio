import React from "react";
import { info } from '../models';
import Value from './partials/Value';
import Portrait from '../assets/profile.JPG';
import PortraitWebP from '../assets/profile.webp';

const Values = () => {
  return (
    <>
      <h2>Values</h2>
      {/* <div className="flex-container">
        <div className="feature-image">
          <img src={info.image} alt="Steven headshot" />
        </div>
        <div className="feature">
          <p>Hey there, thanks for checking out my website. </p>
        </div>
  </div> */}
      <div className="image-article-container">
        {/*<picture>
          <source srcSet={PortraitWebP} type='image/webp' />
          <img className="portrait" src={Portrait} alt="Steven Choi" />
        </picture>*/}
        <div className="article-container">
          {info.values.map((val, index) => {
            return (
              <React.Fragment key={index}>
                <Value title={val.title} quote={val.quote} description={val.description}/>
              </React.Fragment>
            )
          })}
        </div>
      </div>
      
    </>
  );
}

export default Values;