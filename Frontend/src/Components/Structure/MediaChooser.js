/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import of styles rouls
import { MediaChooserStyle } from '../Style/MediaChooserStyle';

// Import inportant components for the specific page

//import { updateLogedIn } from '../store';
import { IconViewer } from'./IconsViewer';
let countLoop = 1;

export let MediaChooser = () => {
  let [ appUrl, setAppUrl ] = useState('/');

  useEffect(() => {
    console.log("🚀 ~ file: IconsViewer.js ~ line 29 ~ incommingMediaObj$.subscribe ~ countLoop", countLoop)
    countLoop++;
  },[]);
  const choosenFolder = () =>{

  } 
  const choosenFile = () =>{
    
  } 
  return (
    <MediaChooserStyle.mainContainer>
      <MediaChooserStyle.pathesContainer>
        Nuvarande mapp och fil struktur = Hoppa emellan
      </MediaChooserStyle.pathesContainer>

      <MediaChooserStyle.mediaContent>
        <MediaChooserStyle.iconsContainer>
          <IconViewer/>
        </MediaChooserStyle.iconsContainer>
        <MediaChooserStyle.viewerContainer>
          Mediavisaren med kontroll
        </MediaChooserStyle.viewerContainer>
      </MediaChooserStyle.mediaContent>
    </MediaChooserStyle.mainContainer>
  );
}

