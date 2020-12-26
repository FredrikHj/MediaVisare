/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect, createRef } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page
import { BackendURL } from'../Data/BackendURL';

export let ShowFiles = (props) => {
    const { fileList } = props;
    useEffect(() => {
    },[fileList]);
    let getImgIconDimension = (imgPath, index) => {
        const img = new Image();
        img.src = imgPath;
        img.onload = function() {
            console.log(fileList[index].name);
            console.log(this.width + 'x' + this.height);
        }
    }

    console.log("🚀 ~ file: ShowFiles.js ~ line 20 ~ ShowFiles ~ fileList", fileList)
    return( 
        <MappFilesIconStyle.filesIconContainer>
            {fileList !== {} && fileList !== undefined &&
                fileList.map((item, index) => {
                    const sourcePath = BackendURL + item.path + item.name;
                    getImgIconDimension(sourcePath, index);
                    return(
                        <MappFilesIconStyle.mediaIconContainer key={index}>
                            <MappFilesIconStyle.mediaIcon key={index*2} id={index} src={sourcePath} style={{height: '75px'}}></MappFilesIconStyle.mediaIcon>
                            <hr></hr>
                            <MappFilesIconStyle.mediaIconName>{item.name}</MappFilesIconStyle.mediaIconName>
                        </MappFilesIconStyle.mediaIconContainer>
                    );
                })            
            }
         </MappFilesIconStyle.filesIconContainer>
    );
}