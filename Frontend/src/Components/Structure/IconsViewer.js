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
    
    useEffect(() => {
        incommingMediaObj$.subscribe((mediaObj) => {
            updateMediaObjList(mediaObj);
        });
    },[mediaObjList]);

    return( 
        <>
            {(mediaObjList === null || mediaObjList === {})
                ?
                    'ADFB'
                :  
                    <>
                        <ShowFolders
                            folderList={ mediaObjList.folders }
                        />

                        <hr/>
                        <ShowFiles
                            fileList={ mediaObjList.files }
                        />
                    </>
            }
        </>
    );
}