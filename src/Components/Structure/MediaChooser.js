/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import of styles rouls
import { MediaChooserStyle } from '../Style/MediaChooserStyle';

// Import inportant components for the specific page
//import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
//import { MediaActionBtn } from '../Components - Old/MediaAction';
//import { MediaContents } from '../Components - Old/MediaContents';
//import { NavFileStructure } from '../Components - Old/NavFileStructure';

//import { updateLogedIn } from '../store';


export let MediaChooser = () => {
  let [ appUrl, setAppUrl ] = useState('/');
  let [ redirectToPage, updateRedirectToPage ] = useState('');
  
  useEffect(() => {
/*     gotoPage$.subscribe((gotoPage) => {
      updateRedirectToPage(gotoPage);
    }); */
    
  },[redirectToPage]);
  return (
    <MediaChooserStyle.mainContainer>
      <MediaChooserStyle.pathesContainer>
        Nuvarande mapp och fil struktur = Hoppa emellan
      </MediaChooserStyle.pathesContainer>

      <MediaChooserStyle.mediaContent>
        <MediaChooserStyle.filesIcon>
          Mappar och ikoner {/* <NavFileStructure location={this.props.location} /> */}
        </MediaChooserStyle.filesIcon>
        <MediaChooserStyle.viewer>
          {
            'Mediavisaren med kontroll'
  /*           <MediaContents 
              location={this.props.location}
              showFileList={ this.state.showFileList }
              getFileItem={ this.getFileItem }
            /> 
  */        }
        </MediaChooserStyle.viewer>

      </MediaChooserStyle.mediaContent>
    </MediaChooserStyle.mainContainer>
  );
}

