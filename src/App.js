import logo from './logo.svg';
import './App.css';
 import React, { Component } from 'react';
 import Header from './components/Header.jsx';
 import Aboutme from './components/Aboutme.jsx';
 import Experience from './components/Experience.jsx';
 import Education from './components/Education.jsx';
 import Skills from './components/Skills.jsx';
 import Footer from './components/Footer.jsx';
 import Achievements from './components/Achievements.jsx';
function App() {
  return (
    <>
   <Header></Header>
   <Aboutme></Aboutme>
  <Experience></Experience>
  <Education></Education>
  <Skills></Skills>
  <Achievements></Achievements>
  <Footer></Footer>
  </>
);
}

export default App;
