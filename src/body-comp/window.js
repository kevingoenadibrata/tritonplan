import React from 'react';
import ReactDOM from 'react-dom';

import WindowSearch from './window-search';
import WindowContent from './window-content';

const Window = () => {
  return (<div className="window">

    <WindowSearch />
    <WindowContent />

  </div>);
}

export default Window;
