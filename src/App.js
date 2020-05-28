import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import SlideShows from './components/SlideShows';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <div className="slides-show">
          <SlideShows />
        </div>
        <div className="search-bar">
          <SearchBar  />
        </div>
        <div style={{height:'200vh'}}>
          
        </div>
      </div>
    )
  }
}

export default App
