import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { axiosGetImage } from '../Data/Axios'
import { StyleHomeImages } from '../Style/StyleHomeImages';
import { dataListObj$ } from '../Data/GlobalProps';

export let HomeImages = () => {
  const [ incommingDataListObj, setIncommingDataListObj ] = useState({});
  const [ fileList, setFileList ] = useState([]);

  useEffect(() => {
    axiosGetImage(incommingDataListObj);
    dataListObj$.subscribe((dataListObj) => {
    console.log("TCL: HomeImages -> folderFileListArr", dataListObj)
      if (dataListObj !== incommingDataListObj) {
        setIncommingDataListObj(dataListObj);
      }
    });
    setInterval(() => {
      axiosGetImage(incommingDataListObj);
    }, 3000, incommingDataListObj);
  },[ incommingDataListObj ] );

  let sortDataList = (item, index) => {
    let pushtoFileList = [...fileList ];
    if ( item.includes('.')) {
      pushtoFileList.push(item);
      setFileList(pushtoFileList);
    }
    
  };
  console.log("TCL: HomeImages -> fileList", fileList)
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
                return(
                  <StyleHomeImages.iconMeasurement key={ index }>

                      {/* <img src={require(`../../Images/${item}`)} alt="erge" width="60"/> */}

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
