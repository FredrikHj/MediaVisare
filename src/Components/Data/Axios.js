import React from 'react';
import axios from 'axios';
import { updateFolderFileList } from '../Data/GlobalProps';

export let axiosGet = (media, fileList) => {
    axios.get('http://localhost:3001/ReqMedia').then(response => {
        console.log("TCL: HomeImages -> response", response)
        console.log("TCL: axiosGet -> media", media)
        console.log(fileList);
        
        if (media === 'HomeImages' && fileList.length === 0) updateFolderFileList(response.data);
    }).catch(error => {
        ////console.log(error.response);
    });
};
