import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { axiosGetImage } from '../Data/Axios'
import { StyleHomeImages } from '../Style/StyleHomeImages';
import { dataListObj$ } from '../Data/GlobalProps';
let reqToBackend = 1;
export let HomeImages = () => {
  const [ incommingDataList, setIncommingDataList ] = useState([]);
  const [ fileList, setFileList ] = useState([]);

  useEffect(() => {
    axiosGetImage(reqToBackend);
    dataListObj$.subscribe((dataListObj) => {
      console.log("TCL: HomeImages -> folderFileListArr", dataListObj)
      console.log("HomeImages -> dataListObj", dataListObj)
      if (dataListObj) {
        if (dataListObj.length === 0) return;
        setIncommingDataList(dataListObj.data);
      }
    });
    if (incommingDataList === undefined || incommingDataList === []) return;
    ;
    //reqToBackend = 2;
    setInterval(() => {
      axiosGetImage(reqToBackend);
    }, 3000, reqToBackend);
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
      <aside >
      Bilder:
      <StyleHomeImages.folderFilePath>
        {(incommingDataList === [])
          ? incommingDataList.data.map((item, index) => {
              sortDataList(item, index);
              console.log("TCL: HomeImages -> item", item)
                return(
                  <StyleHomeImages.iconMeasurement key={ index }>
                  {/* <img src={incommingDataListObj.path + item} alt="erge" width="60"/> */}
                  </StyleHomeImages.iconMeasurement>
                );
              })
            : `${ incommingDataList.data }`
          }
       </StyleHomeImages.folderFilePath>
      </aside>
      <main id="appBody__mainContent">
        
      </main>
      <footer id="actionBtnContainer">

      </footer>
    </StyleHomeImages.container>
  );
}
