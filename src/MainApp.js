/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


// Import style
import { AppBodyStyle } from './Components/Style/AppBodyStyle';
import { HeaderStyle } from './Components/Style/HeaderStyle';
import { FooterStyle } from './Components/Style/FooterStyle';

// Import inportant components for the specific page
/* import { logedIn$ } from './store';
import { Header } from './Components/Header';
import { Login } from './Components/Login'; */
import {MediaBtn } from './Components/Data/MediaBtn';

import { MediaChooser } from './Components/Structure/MediaChooser';
import { routeName } from './Components/Data/RouteNames';
//import { gotoPage$ } from './Components/Data/PropsStorage';
import { reqMedia } from './Components/Data/Axios';

import { from } from 'rxjs';


let MainApp = () => {
  let [ appUrl, setAppUrl ] = useState('/');
  let [ redirectToPage, updateRedirectToPage ] = useState(window.location.pathname);
  
  useEffect(() => {
    reqMedia('showImages');

/*     gotoPage$.subscribe((gotoPage) => {
      updateRedirectToPage('/');
    }); */   
    console.log("routeName", routeName)
  },[]);
const runMediaMode = (e) =>{
  const targetMode = e.target.id;
  console.log("🚀 ~ file: MainApp.js ~ line 41 ~ runMediaMode ~ targetMode", targetMode)
  if(targetMode === 'showImages') {
    
    // Run once then every 10 seconds
    reqMedia('showImages');
/*     setInterval(() => {
      reqMedia('showImages');  
    }, 10000);   */
  }
  if(targetMode === 'showHomeMovies'){
    reqMedia('showHomeMovies');
  }
}

  return (
    <AppBodyStyle.mainContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mediavisare</title>
      </Helmet>
      <HeaderStyle.mainContainer>
        <HeaderStyle.headLine>
          Mediavisare
        </HeaderStyle.headLine>
        <HeaderStyle.mediaBtnContainer>
          <MediaBtn
              btnOptional={ ''}
              onClickFunction={ runMediaMode }
              btnName={'Bilder'}
              id={ 'showImages' }
          
          />
          |
          <MediaBtn
            btnOptional={ '' }
            onClickFunction={ runMediaMode }
            btnName={'Filmer'}
            id={ 'ShowHomeMovies' }
        
          />
        </HeaderStyle.mediaBtnContainer>
      </HeaderStyle.mainContainer>
      
      <Router>
        {window.location.pathname === routeName.mainPage && <Redirect to={ 'MediaChooser'} />}
        <Route path="/MediaChooser" component={ MediaChooser }/>
      </Router>
      

      <FooterStyle.mainContainer>
        Copyright: Fredrik Hjärpe
      </FooterStyle.mainContainer>
    </AppBodyStyle.mainContainer>
  );
}

export default MainApp;
