import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import { StyleHomeImages } from '../Style/StyleHomeImages';

export let HomeImages = () => {
  const [ fileList, setFileList ] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/ReqMedia').then(response => {
      if (fileList.length === 0) setFileList(response.data);
      console.log("TCL: HomeImages -> response", response)
      
    
    }).catch(error => {
      ////console.log(error.response);
    });
  },[] );
  return (
    <StyleHomeImages.container>
      <aside id="appBody__patch">
        
        Bilder:
        {(fileList.length !== 0)
          ? fileList.map((item, index) => {
              console.log(item);
              return(
                <div key={ index }><img src={`../../Images/${item}`} alt="erge"/></div>
              );
            })
          : 'inget inläst'
        }
      'Mapp och filer kommer här'

      </aside>
      <main id="appBody__mainContent">
        
      </main>
      <footer id="actionBtnContainer">

      </footer>
    </StyleHomeImages.container>
  );
}
