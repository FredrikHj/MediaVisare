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
        
        setIncommingDataList(dataListObj.data);
      }
    });
    if (incommingDataList === undefined) console.log('fs<f');
    ;
    reqToBackend = 2;
    /*     setInterval(() => {
      axiosGetImage(reqToBackend);
    }, 3000, incommingDataListObj, reqToBackend); */
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
        {/*   {(incommingDataList.data === [])
            ? incommingDataList.data.map((item, index) => {
              sortDataList(item, index);
              console.log("TCL: HomeImages -> item", item)
                return(
                  <StyleHomeImages.iconMeasurement key={ index }>
                  <img src={incommingDataListObj.path + item} alt="erge" width="60"/>
                  </StyleHomeImages.iconMeasurement>
                );
              })
            : 'fewf'
          } */}
       </StyleHomeImages.folderFilePath>
       'Mapp och filer kommer här'

      </aside>
      <main id="appBody__mainContent">
        
      </main>
      <footer id="actionBtnContainer">

      </footer>
    </StyleHomeImages.container>
  );
}
