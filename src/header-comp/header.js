import React from 'react';
import ReactDOM from 'react-dom';

import HeaderNav from './header-nav';
import HeaderProfile from './header-profile';

import '../App.css';

const Header = () => {
  return (<header className="App-header">
    <HeaderNav />
    <HeaderProfile />
  </header>);
}

export default Header;
