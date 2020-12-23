/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect, createRef } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page
import { BackendURL } from'../Data/BackendURL';
let imgIndex = -1;

export let ShowFiles = (props) => {
    const [ imgPxSizeRefArr, setImgPxSizeRefArr ] = useState([]);
    const { fileList, updateFileList  } = props;

    useEffect(() => {

    },[])
    let saveReactCreateRefInCorrectPlace = (index) => {
        let pushToImgPxSizeRefArr = [...imgPxSizeRefArr];
        
        // Create React.createRef() and save it in the key
        let saveHeight = fileList[index].icon.size.heigth = React.createRef();
        let saveWidth = fileList[index].icon.size.heigth = React.createRef();
        let iconSizeObj = {heigth: saveHeight, width: saveWidth};
        pushToImgPxSizeRefArr.push(iconSizeObj);       
        setImgPxSizeRefArr(pushToImgPxSizeRefArr);
        
        console.log("🚀 ~ file: ShowFiles.js ~ line 29 ~ saveReactCreateRefInCorrectPlace ~ index", index)
        console.log("🚀 ~ file: ShowFiles.js ~ line 30 ~ saveReactCreateRefInCorrectPlace ~ fileList.length-1", fileList.length-1)
        if(index === fileList.length-1) saveValueToKeyInIconSize(index); 
    }
    let saveValueToKeyInIconSize = (index) => {
    console.log("🚀 ~ file: ShowFiles.js ~ line 33 ~ saveValueToKeyInIconSize ~ index", index)
        let pushToFileList = [...fileList];
        console.log("🚀 ~ file: ShowFiles.js ~ line 35 ~ saveValueToKeyInIconSize ~ pushToFileList", pushToFileList)
        // Save icons heith and width into the correct spot
        
    }
    let saveImgPxSize = (e) => {
        //imgIndex++;
        let targetImg = e.target;
        let index = targetImg.id;
        
        // Create a shadow copy of the icons size object from the fileList into imgPxSizeRefArr hook and save the React.createRef() in its keys
        saveReactCreateRefInCorrectPlace(index);

        if(imgPxSizeRefArr.length <= imgIndex) imgPxSizeRefArr[index].push(React.createRef()); 
    }

    return( 
        <MappFilesIconStyle.fileIconContainer>
            {fileList !== {} && fileList !== undefined &&
                fileList.map((item, index) => {
                    const sourcePath = BackendURL + item.path + item.name;
                    return(
                        <>
                            <MappFilesIconStyle.mediaIconImg key={index} id={index} src={sourcePath} onLoad={ saveImgPxSize }></MappFilesIconStyle.mediaIconImg>
                        </>
                    );
                })            
            } 
         </MappFilesIconStyle.fileIconContainer>
    );
}