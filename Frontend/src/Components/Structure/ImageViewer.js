/* ================================================== Image Viewer for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import style
import { MediaViewerStyle } from'../Style/MediaViewerStyle';

// Import inportant components for the specific page
import { incommingMediaObj$ } from'../Data/PropsStorage';

import { ShowFiles } from'./ShowFiles';
import { ShowFolders } from'./ShowFolders';

import { BackendURL } from'../Data/BackendURL';

export let ImageViewer = () => {
    let [ mediaObjList, updateMediaObjList ] = useState(null);
    
    useEffect(() => {
        incommingMediaObj$.subscribe((mediaObj) => {
            updateMediaObjList(mediaObj);
        });
    },[mediaObjList]);
    console.log("🚀 ~ file: ImageViewer.js ~ line 23 ~ ImageViewer ~ mediaObjList", mediaObjList)

    return( 
        <>
            {(mediaObjList !== {} && mediaObjList !== undefined)
                ? 'Välj Bild'
                :
                    <MediaViewerStyle.headLine>
                        {`Bildnamn: ${mediaObjList.files[0].name}`}
                    </MediaViewerStyle.headLine>
                            <MappFilesIconStyle.mediaIconTool>Verktyg = Förstora m.m.</MappFilesIconStyle.mediaIconTool>
                            <MappFilesIconStyle.mediaFileIcon key={index*2} id={index} src={sourcePath} style={{height: '75px'}}></MappFilesIconStyle.mediaFileIcon>
                            <hr></hr>
                        <MappFilesIconStyle.mediaIconName>{item.name}</MappFilesIconStyle.mediaIconName>
            }
        </>
    );
}