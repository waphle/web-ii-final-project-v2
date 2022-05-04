import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

// Backdrop image. Links to an image Jeff made
const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook'),
    // document.body.style.backgroundColor = "lightblue"//make the background of the page light blue
    document.body.style.background = "url('https://cdn.discordapp.com/attachments/963934947758985246/971459941166620772/oie_transparent.png')",
    document.body.style.backgroundRepeat = "no-repeat"
  );
};

export default Backdrop;
