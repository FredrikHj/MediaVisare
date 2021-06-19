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
                console.log("🚀 ~ file: ShowFolders.js ~ line 21 ~ folderList.map ~ mappName", mappName.length > 4)
                return(
                    <>  
                        <MappFilesIconStyle.mediaIconMapp key={index}><FcFolder style={{width: '75px', height: '75px'}}/>
                            <MappFilesIconStyle.mediaIconMappName>
                                {(mappName.length > 4)
                                    ? 
                                        <div style={{width: '100%', overflowX: 'scroll'}}>{mappName}</div>
                                    :   mappName                                 }                            
                            </MappFilesIconStyle.mediaIconMappName>
                        </MappFilesIconStyle.mediaIconMapp>
                    </>
                );
            })            
        }
        </MappFilesIconStyle.mappIconContainer>
    );
}