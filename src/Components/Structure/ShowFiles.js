/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page
import { BackendURL } from'../Data/BackendURL';
let imgIndex = -1;

export let ShowFiles = (props) => {
    const [ imgPxSizeRefArr, setImgPxSizeRefArr ] = useState([]);
    const { fileList } = props;

    useEffect(() => {

    },[])
    
    let saveImgPxSize = (e) => {
        let index = imgIndex++;
        let targetImg = e.target;
        console.log("🚀 ~ file: ShowFiles.js ~ line 12 ~ ShowFiles ~ fileList", fileList)
        
        //if(imgPxSizeRefArr.length <= index) imgPxSizeRefArr[index].push(React.createRef()); 
        
        // Make the icon --> size object in the fileList and its two keys as React.createRef()
        /* fileList[index].icon.size.heigth = React.createRef();
        fileList[index].icon.size.width = React.createRef();
 */    }

    return( 
        <MappFilesIconStyle.fileIconContainer>
            {fileList !== {} && fileList !== undefined &&
                fileList.map((item, index) => {
                    const sourcePath = BackendURL + item.path + item.name;
                    return(
                        <>
                            <MappFilesIconStyle.mediaIconImg key={ index } src={ sourcePath } onLoad={ saveImgPxSize }></MappFilesIconStyle.mediaIconImg>
                        </>
                    );
                })            
            } 
         </MappFilesIconStyle.fileIconContainer>
    );
}