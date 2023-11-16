import React from 'react';
import CreatedThings from './CreatedThings';
import PersonalDetails from './personaldetails';
const AboutMe = () => {
  return (
    
    <div className="page">
      <PersonalDetails />
      <div className="about2">
        <h1>About Me:</h1>
        <p>
          👋I'm a MeGo student with an insatiable curiosity for algorithmic
          software. Armed with Python, C Sharp, SQL, and Linux, I sculpt
          elegant solutions to digital conundrums. But that's not all—these
          days, I'm also conquering HTML, CSS, and JavaScript, weaving
          creativity and precision into every line of code. Join me on this
          exciting journey through the realms of tech! 🚀🔍🐍💻🔥🐧💡
        </p>
      </div>
      <CreatedThings />
    </div>
  );
};

export default AboutMe;
