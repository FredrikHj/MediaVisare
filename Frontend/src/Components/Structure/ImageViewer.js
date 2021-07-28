/* ================================================== Image Viewer for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import style
import { ImageViewerStyle } from'../Style/MediaViewerStyle';

// Import inportant components for the specific page
import { BackendURL } from'../Data/BackendURL';
import { incommingMediaObj$ } from'../Data/PropsStorage';

import { ShowFiles } from'./ShowFiles';
import { ShowFolders } from'./ShowFolders';


export let ImageViewer = () => {
    let [ mediaFile, updateMediaFile ] = useState(null);
    

    useEffect(() => {
        incommingMediaObj$.subscribe((mediaObj) => {
        console.log("🚀 ~ file: ImageViewer.js ~ line 24 ~ incommingMediaObj$.subscribe ~ mediaObj", mediaObj)
        const targetMediaFile = mediaObj.files[0];
            if (mediaObj) {
                updateMediaFile(targetMediaFile);
            }
        });
    },[updateMediaFile]);
    console.log("🚀 ~ file: ImageViewer.js ~ line 23 ~ ImageViewer ~ mediaObjList", mediaFile);
 
    return( 
        <> 
            {(mediaFile !== null)
                ?  <ImageViewerStyle.Container>
                        <ImageViewerStyle.ItemContainer>
                            <ImageViewerStyle.HeadLine>Filnamn:</ImageViewerStyle.HeadLine>
                            <ImageViewerStyle.SubLine>{mediaFile.name}</ImageViewerStyle.SubLine>
                        </ImageViewerStyle.ItemContainer>
                        <section>

                            <ImageViewerStyle.ItemContainer>
                                <ImageViewerStyle.HeadLine>Storlek:</ImageViewerStyle.HeadLine>
                                <ImageViewerStyle.SubLine>{mediaFile.sizeMb} MB</ImageViewerStyle.SubLine>
                            </ImageViewerStyle.ItemContainer>

                            <ImageViewerStyle.ItemTable>
                                <tr><th colspan="2"><ImageViewerStyle.HeadLine>Datum</ImageViewerStyle.HeadLine></th></tr>
                                <tr>
                                    <td><ImageViewerStyle.HeadLine>Skapad:</ImageViewerStyle.HeadLine></td>
                                    <td><ImageViewerStyle.SubLine>{mediaFile.cDate.split('T')[0]}</ImageViewerStyle.SubLine></td>
                                </tr>
                                <tr>
                                    <td><ImageViewerStyle.HeadLine>Ändrad:</ImageViewerStyle.HeadLine></td>
                                    <td><ImageViewerStyle.SubLine>{mediaFile.mDate.split('T')[0]}</ImageViewerStyle.SubLine></td>
                                </tr>
                            </ImageViewerStyle.ItemTable>
                        </section>
                        <section>
                            <img src={`${BackendURL}/${mediaFile.name}`}></img> 

                        </section>

                    
                        <div>
                            <ImageViewerStyle.HeadLine>Beskrivning:</ImageViewerStyle.HeadLine>
                            {mediaFile.descrption}
                            </div>
                    </ImageViewerStyle.Container>
                :   'Välj Bild!'
            }
         </>
    );
}