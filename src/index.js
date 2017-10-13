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

//temp
var obj;

function object1(name, age, city){
  this.name = name;
  this.age = age;
  this.city = city;
}

function createObject(name, age, city){
  obj = new object1(name, age, city);
}

function httpReq(u, m, data){
  fetch(u, {
    method: m,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}
//

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
