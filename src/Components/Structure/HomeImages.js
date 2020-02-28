import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { axiosGetImage } from '../Data/Axios'
import { StyleHomeImages } from '../Style/StyleHomeImages';
import { dataListObj$ } from '../Data/GlobalProps';
let reqToBackend = 0;
export let HomeImages = () => {
  const [ incommingDataListObj, setIncommingDataListObj ] = useState([]);
  const [ fileList, setFileList ] = useState([]);

  useEffect(() => {
    reqToBackend++;
    axiosGetImage(incommingDataListObj, reqToBackend);
    dataListObj$.subscribe((dataListObj) => {
    console.log("TCL: HomeImages -> folderFileListArr", dataListObj)
      let incommingDataArr = dataListObj.data;
        setIncommingDataListObj(incommingDataArr);
    });
   setInterval(() => {
      axiosGetImage(incommingDataListObj);
    }, 3000, incommingDataListObj);
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
  
  return (
    <StyleHomeImages.container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MediaVisare - HomeImages</title>
      </Helmet>
      <aside >
      Bilder:
       <StyleHomeImages.folderFilePath>
         {(incommingDataListObj)
            ? incommingDataListObj.map((item, index) => {
              sortDataList(item, index);
              console.log("TCL: HomeImages -> item", item)
                return(
                  <StyleHomeImages.iconMeasurement key={ index }>
                    <img src={require(`../../Backend/Images/${item}`)} alt="erge" width="60"/> }
                  </StyleHomeImages.iconMeasurement>
                );
              })
            : (incommingDataListObj === {}) ? incommingDataListObj : null
          }
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
