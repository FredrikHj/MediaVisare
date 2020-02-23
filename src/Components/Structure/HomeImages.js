import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { axiosGet } from '../Data/Axios'
import { StyleHomeImages } from '../Style/StyleHomeImages';
import { folderFileListArr$ } from '../Data/GlobalProps';

export let HomeImages = () => {
  const [ incommingDataList, setIncommingDataList ] = useState([]);
  const [ fileList, setFileList ] = useState([]);

  useEffect(() => {
    axiosGet('HomeImages', incommingDataList);
    folderFileListArr$.subscribe((folderFileListArr) => {
      if (incommingDataList.length === 0) {
        setIncommingDataList(folderFileListArr);
      }
    });
  },[ incommingDataList ] );
  let sortDataList = (item, index) => {
    let pushtoFileList = [...fileList ];
    if ( item.includes('.')) {
      pushtoFileList.push(item);
      setFileList(pushtoFileList);
    }
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
          {(incommingDataList.legnth !== 0)
            ? incommingDataList.map((item, index) => {
              sortDataList(item, index);
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
