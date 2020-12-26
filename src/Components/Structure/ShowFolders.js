/* ================================================== MainApp for the app ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { MappFilesIconStyle } from '../Style/MappFilesIconsStyle';

// Import inportant components for the specific page
import { incommingMediaObj$ } from'../Data/PropsStorage';
import { BackendURL } from'../Data/BackendURL';
import { FcFolder, FcOpenedFolder  } from "react-icons/fc";

export let ShowFolders = (props) => {
    const { folderList } = props;

    console.log("🚀 ~ file: ShowFolders.js ~ line 14 ~ ShowFolders ~ folderList", folderList)
    return( 
        <MappFilesIconStyle.mappIconContainer>
         {folderList !== {} && folderList !== undefined &&
            folderList.map((item, index) => {
                const mappName = item.name;
                return(
                    <>
                        <MappFilesIconStyle.mediaIconMapp key={index}><FcFolder />{ mappName }</MappFilesIconStyle.mediaIconMapp>
                    </>
                );
            })            
        }
        </MappFilesIconStyle.mappIconContainer>
    );
}