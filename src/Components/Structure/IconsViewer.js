/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page
import { incommingMediaObj$ } from'../Data/PropsStorage';
import { ShowFiles } from'./ShowFiles';
import { ShowFolders } from'./ShowFolders';

import { BackendURL } from'../Data/BackendURL';

export let IconViewer = () => {
    let [ mediaObjList, updateMediaObjList ] = useState([]);

    useEffect(() => {
        incommingMediaObj$.subscribe((mediaObj) => {
            updateMediaObjList(mediaObj);
        });
    },[]);
    
    const showMediaIcon = () => {
        setTimeout(() => {
        }, 1000);
    }  
    console.log("🚀 ~ file: iconsViewer.js ~ line 20 ~ IconViewer ~ filesArr", mediaObjList)    
    return( 
        <>
            <>
                <ShowFolders />
                <hr/>
                <ShowFiles />
            </> 
        </>
    );
}