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
    if (reqToBackend === 1) {
      axiosGetImage();
/*       setInterval(() => {
      }, 2000);  */
      reqToBackend = 2;
    }
    
    dataListObj$.subscribe((dataListObj) => {
      console.log("TCL: HomeImages -> folderFileListArr", dataListObj)
      console.log("HomeImages -> dataListObj", dataListObj.data);
      if (dataListObj) {
        if (dataListObj.length === 0) return;
          if (dataListObj.data.type !== undefined){
          let file = new File( ['img'], dataListObj.data, { type: dataListObj.data.type } ); 
          console.log("HomeImages -> file", file)
          let imageUrl = URL.createObjectURL(file); 
          console.log("HomeImages -> imageUrl", imageUrl);
          setIncommingDataList(imageUrl);
        }
        
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
      <aside >
      Bilder:
      <StyleHomeImages.folderFilePath>
      <img src={ incommingDataList } alt="erge" //width="60"
      />
{/*         {(incommingDataList !== [])
          ? incommingDataList.map((item, index) => {
             
              console.log("TCL: HomeImages -> item", item)
                return(
                  <StyleHomeImages.iconMeasurement key={ index }>
                    <img src={`http://localhost:3001/${item}`} alt="erge" width="60"/>
                  </StyleHomeImages.iconMeasurement>
                );
              })
            : 'rvd'
          } */}
       </StyleHomeImages.folderFilePath>
      </aside>
      <main id="appBody__mainContent">
        
      </main>
      <footer id="actionBtnContainer">

      </footer>
    </StyleHomeImages.container>
  );
}
