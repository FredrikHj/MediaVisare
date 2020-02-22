import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import { StyleMainBody, StyleHeader } from './Components/Style/StyleMainApp.js';

import { logedIn$ } from './store';
import { FilePath } from './Components/Structure/FilePath';
import { HomeImages } from './Components/Structure/HomeImages';
import { HomeMovies } from './Components/Structure/HomeMovies';

let MainApp = () => {
  const [ startMedia, setStartMedia ] = useState('HomeImages');

  useEffect(() => {
  },[ startMedia ])
  return (
    <StyleMainBody>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MediaVisare - ?</title>
      </Helmet>
      <Router>
        <StyleHeader.container>
          <StyleHeader.headline>MediaVisare</StyleHeader.headline>         
          <div></div>
          <StyleHeader.headline>
            <Link to="/HomeImages">Bilder></Link> / 
            <Link to="/HomeMovies">Filmer</Link>
          </StyleHeader.headline> 
        </StyleHeader.container>
        <FilePath/>
        <Route exact path="/HomeImages" component={ HomeImages } />
          {startMedia === 'HomeImages' && <Redirect to="/HomeImages"/>}
        <Route path="/HomeMovies" component={ HomeMovies }/>
      </Router>
    </StyleMainBody>
  );
}

export default MainApp;
