import React, { Component, useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import * as resumeData from './resumeData.json';

export default function App() {

  return (
    <div className="App">
      <Header data={resumeData.main}/>
      <About data={resumeData.main}/>
      <Portfolio data={resumeData.portfolio}/>
    </div>
  );
}
