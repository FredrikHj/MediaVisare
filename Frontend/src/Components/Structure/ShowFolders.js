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

    return( 
        <MappFilesIconStyle.mappIconContainer>
         {folderList !== {} && folderList !== undefined &&
            folderList.map((item, index) => {
                const mappName = item.name;
                return(
                    <>  
                        <MappFilesIconStyle.mediaIconMapp key={index}><FcFolder style={{width: '75px', height: '75px'}}/>
                            <MappFilesIconStyle.mediaIconMappName>
                                {(mappName.length > 4)
                                    ?   <div>?</div>
                                    :   mappName
                                }                            
                            </MappFilesIconStyle.mediaIconMappName>
                        </MappFilesIconStyle.mediaIconMapp>
                    </>
                );
            })            
        }
        </MappFilesIconStyle.mappIconContainer>
    );
}