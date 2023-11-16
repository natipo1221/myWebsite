import React from "react";

function Things ({props}) {
  return (
    <div className="things">
      <p id='syntaxthings'>Here are some nice things I created:</p>
      {props.map((prop, index) => (
        <div className='video' key={index}>
          <p id='syntax'>{prop.syntax}</p>
          <a href={prop.link}>
            <img className="imagethings" src={prop.video} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Things;
