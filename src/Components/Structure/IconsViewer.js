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
    let [ mediaObjList, updateMediaObjList ] = useState(null);
    let [ folderList, updateFolderList ] = useState('Laddar mappar');
    let [ fileList, updateFileList ] = useState([]);
    
    useEffect(() => {
        incommingMediaObj$.subscribe((mediaObj) => {
            console.log("🚀 ~ file: IconsViewer.js ~ line 21 ~ incommingMediaObj$.subscribe ~ mediaObj", mediaObj)
            updateMediaObjList(mediaObj);
            updateFolderList(mediaObj.folders);
            updateFileList(mediaObj.files);
        });
    },[fileList, folderList, mediaObjList]);
    console.log("🚀 ~ file: IconsViewer.js ~ line 16 ~ IconViewer ~ mediaObjList", mediaObjList)
    return( 
        <>
            {(mediaObjList === null || mediaObjList === {})
                ?
                    'ADFB'
                :  
                    <>
                        <ShowFolders
                            folderList={ folderList }
                        />
                        <hr/>
                        <ShowFiles
                            fileList={ fileList }
                        />
                    </>
            }
        </>
    );
}