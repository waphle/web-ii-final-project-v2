import React from 'react';

import './MainHeader.css';

// Main header navigation bar prop
const MainHeader = props => {
  return <header className="main-header">{props.children}</header>;
};

// Exports the nav. bar prop
export default MainHeader;
