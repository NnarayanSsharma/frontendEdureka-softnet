import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import SlideShows from './components/SlideShows';
import SearchBar from './components/SearchBar';
import Services from './components/Services';
import Footer from './components/Footer';
import StartTeaching from './components/StartTeaching';
import FeedbackStudentSection from './components/FeedbackStudentSection';
import Sponsored from './components/Sponsored';
import ContactUs from './components/ContactUs';

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
        <Services />
        <FeedbackStudentSection />
        <Sponsored />
        <StartTeaching />
        <ContactUs />
        <Footer />
      </div>
    )
  }
}

export default App
