/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page

export let IconViewer = (props) => {
   const { mediaType, name, id, mediaPath, altText } = props;
    return( 
        <MappFilesIconStyle.iconContainer>
            <MappFilesIconStyle.mediaIconImg src={ mediaPath }></MappFilesIconStyle.mediaIconImg>
        </MappFilesIconStyle.iconContainer>
    );
}