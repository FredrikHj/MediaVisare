/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import of styles rouls
import { MediaChooserStyle } from '../Style/MediaChooserStyle';
import { ImageViewer } from'./ImageViewer';

// Import inportant components
import { incommingMediaObj$ } from'../Data/PropsStorage';
import { Spinner } from '../Data/Spinner';

import { IconViewer } from'./IconsViewer';
import { RiWomenFill } from 'react-icons/ri';

export let MediaChooser = () => {
  console.log('MediaChooser - Inne');
  let [ appUrl, setAppUrl ] = useState('/');
  let [ mediaList, updateMediaList ] = useState({});

  useEffect(() => {
    incommingMediaObj$.subscribe((mediaObj) => {
      if (mediaObj) updateMediaList(mediaObj)
  });
  },[]);
  
  return (
    <MediaChooserStyle.mainContainer>
      <MediaChooserStyle.pathesContainer>
        Nuvarande mapp och fil struktur = Hoppa emellan
      </MediaChooserStyle.pathesContainer>
        {// Checking if the object has the key mediaType
          (!mediaList.hasOwnProperty('mediaType') && mediaList !== {})
            ? <MediaChooserStyle.SpinnerPoss>
                <Spinner str='Data Laddas ...'/>
              </MediaChooserStyle.SpinnerPoss>
            : <MediaChooserStyle.mediaContent>
                <MediaChooserStyle.iconsContainer>
                    <IconViewer/>
                </MediaChooserStyle.iconsContainer>
                <MediaChooserStyle.viewerContainer>
                    <ImageViewer/>
                </MediaChooserStyle.viewerContainer>
              </MediaChooserStyle.mediaContent>
        }
    </MediaChooserStyle.mainContainer>
  );
}

