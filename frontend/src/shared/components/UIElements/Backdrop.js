import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook'),
    document.body.style.backgroundColor = "lightblue"//make the background of the page light blue
  );
};

export default Backdrop;
