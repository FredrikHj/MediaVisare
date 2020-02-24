import React from 'react';
import axios from 'axios';
import { updateFolderFileList } from '../Data/GlobalProps';
//let url = 'https://192.168.0.210';
let url = 'https://localhost';

export let axiosGet = (media, fileList) => {
    axios.get(`${url}:3001/ReqMedia`).then(response => {
        console.log("TCL: HomeImages -> response", response)
        console.log("TCL: axiosGet -> media", media)
        console.log(fileList.length);
        
        if (media === 'HomeImages' && fileList.length === 0) updateFolderFileList(response.data);
    }).catch(error => {
        ////console.log(error.response);
    });
};
