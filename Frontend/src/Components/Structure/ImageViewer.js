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
        console.log('ImageViewer - Inne');
        console.log("🚀 ~ file: ImageViewer.js ~ line 32 ~ ImageViewer ~ mediaFile", mediaFile);
        
        incommingMediaObj$.subscribe((mediaObj) => {
            if (mediaObj) {
                const targetMediaFile = mediaObj.files[0];
                updateMediaFile(targetMediaFile);
            }
        });
    },[mediaFile]);
 
    return( 
        <> 
            {(mediaFile !== null)
                ? <ImageViewerStyle.MediaContainer>
                        <ImageViewerStyle.NameContainer>
                            <ImageViewerStyle.HeadLine>Filnamn:</ImageViewerStyle.HeadLine>
                            <ImageViewerStyle.SubLine>{mediaFile.name}</ImageViewerStyle.SubLine>
                        </ImageViewerStyle.NameContainer>

                        <ImageViewerStyle.SizeDateContainer>
                            <ImageViewerStyle.SizeContainer>
                                <ImageViewerStyle.HeadLine>Storlek:</ImageViewerStyle.HeadLine>
                                <ImageViewerStyle.SubLine>{mediaFile.sizeMb} MB</ImageViewerStyle.SubLine>
                            </ImageViewerStyle.SizeContainer>

                            <ImageViewerStyle.DateTable>
                                <tr><th colspan="2"><ImageViewerStyle.HeadLine>Datum</ImageViewerStyle.HeadLine></th></tr>
                                <tr>
                                    <td><ImageViewerStyle.HeadLine>Skapad:</ImageViewerStyle.HeadLine></td>
                                    <td><ImageViewerStyle.SubLine>{mediaFile.cDate.split('T')[0]}</ImageViewerStyle.SubLine></td>
                                </tr>
                                <tr>
                                    <td><ImageViewerStyle.HeadLine>Ändrad:</ImageViewerStyle.HeadLine></td>
                                    <td><ImageViewerStyle.SubLine>{mediaFile.mDate.split('T')[0]}</ImageViewerStyle.SubLine></td>
                                </tr>
                            </ImageViewerStyle.DateTable>
                        </ImageViewerStyle.SizeDateContainer>

                        <ImageViewerStyle.DescriptionContainer>
                            <hr/>
                            <br></br><br></br>

                           <ImageViewerStyle.MediaShower src={`${BackendURL}/${mediaFile.name}`}></ImageViewerStyle.MediaShower> 
                            <br></br><br></br>
                            <ImageViewerStyle.HeadLine>Beskrivning:</ImageViewerStyle.HeadLine>
                            <ImageViewerStyle.DescriptionPharagraph>{mediaFile.description}</ImageViewerStyle.DescriptionPharagraph>
                        </ImageViewerStyle.DescriptionContainer>
                    </ImageViewerStyle.MediaContainer>
                :   'Välj Bild!'
            }
         </>
    );
}