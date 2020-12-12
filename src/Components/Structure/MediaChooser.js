/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import of styles rouls
import { MediaChooserStyle } from '../Style/MediaChooserStyle';

// Import inportant components for the specific page
import { BackendURL } from'../Data/BackendURL';

//import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
//import { MediaActionBtn } from '../Components - Old/MediaAction';
//import { MediaContents } from '../Components - Old/MediaContents';
//import { NavFileStructure } from '../Components - Old/NavFileStructure';

//import { updateLogedIn } from '../store';
import { IconViewer } from'./IconsViewer';
import { incommingMediaObj$ } from'../Data/PropsStorage';

export let MediaChooser = () => {
  let [ appUrl, setAppUrl ] = useState('/');
  let [ mediaObj, updateMediaObj ] = useState();

  useEffect(() => {
    incommingMediaObj$.subscribe((media) => {
      updateMediaObj(media);
    });
  },[mediaObj]);
  console.log("🚀 ~ file: MediaChooser.js ~ line 32 ~ MediaChooser ~ mediaObj", mediaObj)
  
  return (
    <MediaChooserStyle.mainContainer>
      <MediaChooserStyle.pathesContainer>
        Nuvarande mapp och fil struktur = Hoppa emellan
      </MediaChooserStyle.pathesContainer>

      <MediaChooserStyle.mediaContent>
        <MediaChooserStyle.iconsContainer>
          Mappar och ikoner {/* <NavFileStructure location={this.props.location} /> */}
          <IconViewer 
            mediaObj={ mediaObj }
          />
        </MediaChooserStyle.iconsContainer>
        <MediaChooserStyle.viewerContainer>
          {
            'Mediavisaren med kontroll'
  /*           <MediaContents 
              location={this.props.location}
              showFileList={ this.state.showFileList }
              getFileItem={ this.getFileItem }
            /> 
  */        }
        </MediaChooserStyle.viewerContainer>

      </MediaChooserStyle.mediaContent>
    </MediaChooserStyle.mainContainer>
  );
}

