import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import './App.css';
import Header from './header-comp/header';
import Bodybg from './body-comp/body-bg';
import Window from './body-comp/window';
import registerServiceWorker from './registerServiceWorker';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <div className= "body">
          <Bodybg />
          <Window />
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
