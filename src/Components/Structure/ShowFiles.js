/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page
import { incommingMediaObj$ } from'../Data/PropsStorage';
import { BackendURL } from'../Data/BackendURL';

export let ShowFiles = () => {
    let [ fileList, updateFileList ] = useState([]);

    useEffect(() => {
        incommingMediaObj$.subscribe((mediaObj) => {
            updateFileList(mediaObj.files);
        });
    },[]); 
    return( 
        <MappFilesIconStyle.fileIconContainer>
            {fileList !== {} && fileList !== undefined &&
                fileList.map((item, index) => {
                    const sourcePath = BackendURL + item.path + item.name;
                    return(
                        <>
                            <MappFilesIconStyle.mediaIconImg key={ index } src={ sourcePath }></MappFilesIconStyle.mediaIconImg>
                        </>
                    );
                })            
            } 
         </MappFilesIconStyle.fileIconContainer>
    );
}