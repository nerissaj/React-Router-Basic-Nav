import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';


const App = () => (
  <Router>
  <div>
    <Navigation />
  </div>
  <Route path="/" exact component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/contact" component={Contact}/>
  </Router>
);

export default App;
