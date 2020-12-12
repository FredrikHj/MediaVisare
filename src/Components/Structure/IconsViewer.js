/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page

export let IconViewer = (props) => {
   const { mediaObj } = props;
    console.log("🚀 ~ file: iconsViewer.js ~ line 11 ~ IconViewer ~ mediaObj", mediaObj)
    
    return( 
        <MappFilesIconStyle.iconContainer>
            {(mediaObj == {})
                ?
                    're'
/*                     (mediaObj.files[0].mediaType === 'Images')
                        ?
                            mediaObj.files.map((item, index) => {
                                console.log("🚀 ~ file: iconsViewer.js ~ line 17 ~ ?mediaObj.files.map ~ item", item)
                                
                                
                            })
                        : ''
 */                : ''
            }
        </MappFilesIconStyle.iconContainer>
    );
}
/*  <MappFilesIconStyle.mediaIconImg src={ 'mediaPath' }></MappFilesIconStyle.mediaIconImg>
*/