import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

import { logedIn$ } from './store';
import { Header } from './Components/Header';
import { FilePath } from './Components/FilePath';
import { HomeImages } from './Components/HomeImages';
import { HomeMovies } from './Components/HomeMovies';

let MainApp = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MediaVisare - ?</title>
      </Helmet>
      <Header/>
      <FilePath/>
      <Router>
        <Route exact path="/HomeImages" component={ HomeImages } />
        <Route path="/HomeMovies" component={ HomeMovies }/>
      </Router>
    </>
  );
}

export default MainApp;
