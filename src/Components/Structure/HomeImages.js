import React, { useState, useEffect } from 'react';
//import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import { StyleHomeImages } from '../Style/StyleHomeImages';

export let HomeImages = () => {
 
  return (
    <StyleHomeImages.container>
      
      <aside id="appBody__patch">
      Bilder -
      Mapp och filer kommer här

      </aside>
      <main id="appBody__mainContent">
        
      </main>
      <footer id="actionBtnContainer">

      </footer>
    </StyleHomeImages.container>
  );
}
