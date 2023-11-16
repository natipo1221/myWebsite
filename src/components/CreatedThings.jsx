import React from 'react';
import Things from './Things';


const prop = [{syntax: "Snake game in python👇", link:"https://github.com/natipo1221/Snake", video:"./src/Untitled.gif"}, {syntax: "Tic-Tac-Toe game in python👇", link:"https://github.com/natipo1221/tic-tac-toe", video:"./src/tic-tac-toe.gif"}]
const CreatedThings = () => {
  return (
    <div>
    <Things props={prop}/>
    </div>
  );
};

export default CreatedThings;
