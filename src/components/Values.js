import React from "react";
import { info } from '../models';
import Value from './partials/Value';

const Values = () => {
  return (
    <>
      <h2>Values</h2>
      <div className="image-article-container">
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