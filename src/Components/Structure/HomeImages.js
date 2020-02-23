import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { axiosGet } from '../Data/Axios'
import { StyleHomeImages } from '../Style/StyleHomeImages';
import { folderFileListArr$ } from '../Data/GlobalProps';

export let HomeImages = () => {
  const [ fileList, setFileList ] = useState([]);

  useEffect(() => {
    folderFileListArr$.subscribe((folderFileListArr) => {
    console.log("TCL: HomeImages -> folderFileListArr", folderFileListArr)
      setFileList(folderFileListArr);
    });
    if (fileList.length === 0) {
      //setFileList(axiosGet('HomeImages', fileList));
      
    }
    console.log(axiosGet('HomeImages', fileList));
    
  },[fileList] );
  console.log("TCL: HomeImages -> fileList", fileList)
  let checkIncomingDataList = (incommingData) => {
    incommingData
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
           {(fileList.length !== 0)
            ? fileList.map((item, index) => {
                checkIncomingDataList(item);
                console.log(item);
                return(
                  <StyleHomeImages.iconMeasurement key={ index }>

                      {/* <img src={require(`../../Images/${item}`)} alt="erge" width="60"/> */}

                  </StyleHomeImages.iconMeasurement>
                );
              })
            : 'inget inläst'
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
