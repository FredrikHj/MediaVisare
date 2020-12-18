/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page
import { BackendURL } from'../Data/BackendURL';

export let ShowFiles = (props) => {
    const [ imgPxSizeRefArr, setImgPxSizeRefArr ] = useState([]);

    console.log("🚀 ~ file: ShowFiles.js ~ line 12 ~ ShowFiles ~ refsImgSizeInPx", imgPxSizeRefArr)

    const { fileList } = props;
    console.log("🚀 ~ file: ShowFiles.js ~ line 12 ~ ShowFiles ~ fileList", fileList)
    
    let saveImgPxSize = (e) => {
        console.log("🚀 ~ file: ShowFiles.js ~ line 21 ~ saveImgPxSize ~ e", e)
        
    }

    return( 
        <MappFilesIconStyle.fileIconContainer>
            {fileList !== {} && fileList !== undefined &&
                fileList.map((item, index) => {
                    //if(imgPxSizeRefArr[index].length <= index) imgPxSizeRefArr[index].push(React.createRef()); 
                    const sourcePath = BackendURL + item.path + item.name;
                    return(
                        <>
                            <MappFilesIconStyle.mediaIconImg key={ index } src={ sourcePath } ref={ imgPxSizeRefArr[index]} onChange={ saveImgPxSize }></MappFilesIconStyle.mediaIconImg>
                        </>
                    );
                })            
            } 
         </MappFilesIconStyle.fileIconContainer>
    );
}