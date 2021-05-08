/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect, createRef } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page
import { BackendURL } from'../Data/BackendURL';

export let ShowFiles = (props) => {
    const [ imgIconDimension, setImgIconDimension ] = useState([]);

    const { fileList } = props;
    useEffect(() => {
    },[fileList, imgIconDimension]);
    
    let getImgIconDimension = (imgPath, index) => {
        const img = new Image();
        img.src = imgPath;
        img.onload = function(){
            let imgDimensionObj = {
                height: this.height,
                width: this.width,
            }
            addImgIconDimension(imgDimensionObj, index)
        }
    }
    const addImgIconDimension = (imgDimensionObj, index) => {
        fileList[index].icon.size.height = imgDimensionObj.height;
        fileList[index].icon.size.width = imgDimensionObj.width;
    }

    console.log("🚀 ~ file: ShowFiles.js ~ line 20 ~ ShowFiles ~ fileList", fileList)
    return( 
        <MappFilesIconStyle.filesIconContainer>
            {fileList !== {} && fileList !== undefined &&
                fileList.map((item, index) => {
                    console.log("🚀 ~ file: ShowFiles.js ~ line 38 ~ fileList.map ~ item", item)
                    // The local file link and funtion for the saving of the file dimension for later use
                    const sourcePath = BackendURL + item.currentPath + item.name;
                    console.log("🚀 ~ file: ShowFiles.js ~ line 40 ~ fileList.map ~ sourcePath", sourcePath)
                    getImgIconDimension(sourcePath, index);
                    return(
                        <MappFilesIconStyle.mediaFileIconContainer key={index}>
                            <MappFilesIconStyle.mediaIconTool>Verktyg = Förstora m.m.</MappFilesIconStyle.mediaIconTool>
                                <MappFilesIconStyle.mediaFileIcon key={index*2} id={index} src={sourcePath} style={{height: '75px'}}></MappFilesIconStyle.mediaFileIcon>
                                <hr></hr>
                            <MappFilesIconStyle.mediaIconName>{item.name}</MappFilesIconStyle.mediaIconName>
                        </MappFilesIconStyle.mediaFileIconContainer>
                    );
                })            
            }
         </MappFilesIconStyle.filesIconContainer>
    );
}