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
                        <MappFilesIconStyle.mediaIconMapp style={(mappName.length > 4) ? {marginTop: '25px', marginLeft: '-45px'} : null} key={index}><FcFolder style={{width: '75px', height: '75px'}}/>
                                {(mappName.length > 4)
                                    ?   <MappFilesIconStyle.mediaIconMappNameBigger4>{mappName}</MappFilesIconStyle.mediaIconMappNameBigger4>
                                    :   <MappFilesIconStyle.mediaIconMappName>{mappName}</MappFilesIconStyle.mediaIconMappName>
                                }                            
                        </MappFilesIconStyle.mediaIconMapp>
                    </>
                );
            })            
        }
        </MappFilesIconStyle.mappIconContainer>
    );
}