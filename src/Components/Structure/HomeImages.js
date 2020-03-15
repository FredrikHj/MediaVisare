import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import {serverUrl } from '../Data/runUrls';
import { ListMedia } from '../Data/ListMedia';

import { axiosGetImage } from '../Data/Axios'
import { StyleHomeImages } from '../Style/StyleHomeImages';
import { dataListObj$ } from '../Data/GlobalProps';
let reqToBackend = 1;
export let HomeImages = () => {
  const [ incommingDataList, setIncommingDataList ] = useState([]);
  const [ fileList, setFileList ] = useState([]);

  useEffect(() => {
    if (reqToBackend === 1) {
      setInterval(() => {
        axiosGetImage();
      }, 2000);
      reqToBackend = 2;
   }

    dataListObj$.subscribe((dataListObj) => {
      console.log("HomeImages -> dataListObj", dataListObj)
      if (dataListObj) {
        setIncommingDataList(dataListObj.data);        
      }
    });
    
    
    if (incommingDataList === undefined || incommingDataList === []) return;
  },[] );
  
  
  let sortDataList = (item, index) => {
    /*     let pushtoFileList = [...fileList ];
    if ( item.includes('.')) {
      pushtoFileList.push(item);
      setFileList(pushtoFileList);
    }
    */
  };
  
  let checkIncomingDataList = (incommingData) => {
    
  }
  console.log("HomeImages -> incommingDataList", incommingDataList);
  return (
    <StyleHomeImages.container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MediaVisare - HomeImages</title>
      </Helmet>
      <StyleHomeImages.folderFileContainer>
        <ListMedia
          styleStart="<StyleHomeImages.folders>"
          styleEnd="</StyleHomeImages.folders>"
          ListData={ incommingDataList }
        />
        

        
        <StyleHomeImages.files>
          {(incommingDataList !== undefined)
            ? (incommingDataList.length !== 0) 
              ? incommingDataList.map((item, index) => {  
                console.log("TCL: HomeImages -> item", item)
                  return(
                    <StyleHomeImages.iconMeasurement key={ index }>
                      <img src={ serverUrl + item} alt="erge" height="80"/>
                    </StyleHomeImages.iconMeasurement>
                  );
                })
            : 'Finns inga bilder'
          : null
          }
        </StyleHomeImages.files>
      </StyleHomeImages.folderFileContainer>

      <StyleHomeImages.appBody__mainContent>

      
      </StyleHomeImages.appBody__mainContent>
      <footer id="actionBtnContainer">

      </footer>
    </StyleHomeImages.container>
  );
}
