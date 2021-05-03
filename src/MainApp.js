/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


// Import style
import { AppBodyStyle } from './Components/Style/AppBodyStyle';
import { HeaderStyle, specialStyle } from './Components/Style/HeaderStyle';
import { FooterStyle } from './Components/Style/FooterStyle';
import { RiSettings5Fill } from 'react-icons/ri';

// Import inportant components for the specific page
/* import { logedIn$ } from './store';
import { Header } from './Components/Header';
import { Login } from './Components/Login'; */
import {MediaBtn } from './Components/Data/MediaBtn';

import { MediaChooser } from './Components/Structure/MediaChooser';
import { routeName } from './Components/Data/RouteNames';
import { mediaRootPath$ } from './Components/Data/PropsStorage';
import { reqMedia } from './Components/Data/Axios';

import { from } from 'rxjs';

let MainApp = () => {
  let [ appUrl, setAppUrl ] = useState('/');
  let [ redirectToPage, updateRedirectToPage ] = useState(window.location.pathname);
  let [ mediaRootPath, updateMedieRootPath ] = useState('');
  
  useEffect(() => {
    reqMedia('showImages');
    
    mediaRootPath$.subscribe((mediaRootPath) => {
      updateMedieRootPath(mediaRootPath);
    });
    console.log("routeName", routeName)
  },[mediaRootPath]);
  const runHeadBtns = (e) =>{
    const targetBtn = e.target;
    const targetMode = targetBtn.id;
    console.log("🚀 ~ file: MainApp.js ~ line 41 ~ runMediaMode ~ targetMode", targetBtn)
    console.log("🚀 ~ file: MainApp.js ~ line 44 ~ runHeadBtns ~ targetMode", targetMode)
    if(targetMode === 'showImages') {
      
      // Run once then every 10 seconds
      reqMedia('showImages');
      /*     setInterval(() => {
        reqMedia('showImages');  
      }, 10000);   */
    }
    if(targetMode === 'showHomeMovies') reqMedia('showHomeMovies');
    if(targetMode === 'settings') reqMedia('showHomeMovies');
  }
  console.log("🚀 ~ file: MainApp.js ~ line 33 ~ MainApp ~ mediaRootPath", mediaRootPath)
  
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
              onClickFunction={ runHeadBtns }
              btnName={'Bilder'}
              id={ 'showImages' }
              styledObj={{}}
          />
          |
          <MediaBtn
            btnOptional={ '' }
            onClickFunction={ runHeadBtns }
            btnName={'Filmer'}
            id={ 'ShowHomeMovies' }
            styledObj={{}}
          />
        </HeaderStyle.mediaBtnContainer>
        <HeaderStyle.appSetting id="settings" onClick={runHeadBtns}>
          <section>
              {(mediaRootPath === '')
                ? 'RootPath: ...'
                : `RootPath: ${mediaRootPath}`
              }
          </section>
          {/* <RiSettings5Fill style={specialStyle.settingSymbol}/> */}
        </HeaderStyle.appSetting>
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
