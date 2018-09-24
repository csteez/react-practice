import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CCForm from './cc-form'; 
import SignIn from './sign-in'; 
import LandingPage from './landing-page'; 

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'; 
import Calculator from './calculator';

const App = () => (
  <Router>
    <div>
      <Route path="/cc-form" component={CCForm}/>
      <Route path="/sign-in" component={SignIn}/>
      <Route path="/landing-page" component={LandingPage}/>
      <Route path="/calculator" component={Calculator}/>
    </div>
  </Router>
)


export default App;
