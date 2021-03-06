import React from 'react';
import './Navbar.css';

//Navbar
const Navbar = props => (
  <div className="navbar ">
    <div><i>Clicky Game</i></div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
    </div>
  </div>
);

export default Navbar;