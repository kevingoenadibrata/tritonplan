import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul class="headerContent">
            <li>Class List</li>
            <li>Departments</li>
            <li>About Us</li>
          </ul>
          <div class="profile"></div>
        </header>


        <div class= "body">
          <div class="bg"></div>

          <div class="window">

            <div class="search-wrapper">
              <input type="text" placeholder="Search Courses" class="searchbar"></input>
              <div class= "search-button">Search</div>
            </div>

            <div class="window-content"></div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
