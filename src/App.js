import React from 'react';
//import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './container/home/home.js';
import Contact from './container/contact/contact.js';
import Gallery from './container/gallery/gallery.js';
import About from './container/about/about.js';
import Header from './container/header-footer/header.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Gallery />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
