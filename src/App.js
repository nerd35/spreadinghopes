import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/static/Navbar.jsx';
import Home from './components/layout/Home.jsx';
import About from './components/layout/About.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/About" component={About} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
