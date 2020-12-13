/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page
import { incommingMediaObj$ } from'../Data/PropsStorage';
import { BackendURL } from'../Data/BackendURL';

export let IconViewer = () => {
    let [ mediaObjList, updateMediaObjList ] = useState([]);

    useEffect(() => {
        incommingMediaObj$.subscribe((mediaObj) => {
            updateMediaObjList(mediaObj);
        });
    },[]);
    console.log("🚀 ~ file: iconsViewer.js ~ line 20 ~ IconViewer ~ filesArr", mediaObjList)    
    return( 
        <MappFilesIconStyle.iconContainer>
            {(mediaObjList !== {})
                ?
                    (mediaObjList.mediaType === 'Images')
                        ? 
                            mediaObjList.files.map((item, index) => {
                                const sourcePath = BackendURL + item.path + item.name;
                                return(
                                    <>
                                        <MappFilesIconStyle.mediaIconImg key={ index } src={ sourcePath }></MappFilesIconStyle.mediaIconImg>
                                    </>
                                );
                            })
                        : ''
                : 'gerg'
            }
        </MappFilesIconStyle.iconContainer>
    );
}