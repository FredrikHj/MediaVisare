/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page
import { incommingMediaObj$ } from'../Data/PropsStorage';
import { BackendURL } from'../Data/BackendURL';
import { FcFolder, FcOpenedFolder  } from "react-icons/fc";
import { updateCurrentFolder } from'../Data/PropsStorage';

export let ShowFolders = (props) => {
    const { folderList } = props;

    return( 
        <MappFilesIconStyle.mappIconContainer>
         {folderList !== {} && folderList !== undefined &&
            folderList.map((item, index) => {
                const mappName = item.name;
                return(
                    <MappFilesIconStyle.mediaIconMapp key={index}>
                            <FcFolder style={{width: '75px', height: '75px'}} id={item.name }/>
                        <MappFilesIconStyle.mediaIconBtn onClick={ updateCurrentFolder } id={item.name }>
                        </MappFilesIconStyle.mediaIconBtn>
                        <MappFilesIconStyle.mediaIconMappName onClick={ updateCurrentFolder } id={item.name }>{mappName}</MappFilesIconStyle.mediaIconMappName>
                    </MappFilesIconStyle.mediaIconMapp>
                );
            })            
        }
        </MappFilesIconStyle.mappIconContainer>
    );
}