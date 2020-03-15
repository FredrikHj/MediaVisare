import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import {serverUrl } from '../Data/runUrls';

import { axiosGetImage } from '../Data/Axios'
import { StyleHomeImages } from '../Style/StyleHomeImages';
import { dataListObj$ } from '../Data/GlobalProps';
let reqToBackend = 1;
export let HomeImages = () => {
  const [ incommingDataList, setIncommingDataList ] = useState([]);
  const [ fileList, setFileList ] = useState([]);

  useEffect(() => {
/*     if (reqToBackend === 1) {
      setInterval(() => { */
        axiosGetImage();
      //}, 2000);
      reqToBackend = 2;
    //}

    dataListObj$.subscribe((dataListObj) => {
    console.log("HomeImages -> dataListObj", dataListObj)
      if (dataListObj) {
<<<<<<< HEAD
          setIncommingDataList(dataListObj.data);
=======
        if (dataListObj.length === 0) return;
          if (dataListObj.data.type !== undefined){
          let file = new File(['img'], dataListObj.data, { type: dataListObj.data.type } ); 
          console.log("HomeImages -> file", file)
          let imageUrl = URL.createObjectURL(file); 
          console.log("HomeImages -> imageUrl", imageUrl);
          setIncommingDataList(imageUrl);
        }
        
>>>>>>> 5341eee822530b6d339dd4751f0b2a797d55be62
      }
    });
    
    
    if (incommingDataList === undefined) return;
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
         {(incommingDataList !== undefined)
            ? (incommingDataList.length !== 0) ? incommingDataList.map((item, index) => {
                
                console.log("TCL: HomeImages -> item", item)
                  return(
                    <StyleHomeImages.iconMeasurement key={ index }>
                      <img src={ serverUrl + item} alt="erge" width="80"/>
                    </StyleHomeImages.iconMeasurement>
                  );
                })
            : 'Finns inga bilder'
          : null
        }
      </StyleHomeImages.folderFilePath>
      </aside>
      <main id="appBody__mainContent">
        
      <img src={ incommingDataList } alt="erge"// width="60"
      />
      </main>
      <footer id="actionBtnContainer">

      </footer>
    </StyleHomeImages.container>
  );
}
