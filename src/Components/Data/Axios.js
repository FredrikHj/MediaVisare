import React from 'react';
import axios from 'axios';
import { updateFolderFileList } from '../Data/GlobalProps';
//let url = 'https://192.168.0.210';
let url = 'http://localhost';

export let axiosGet = (media, incommingDataList) => {
    axios.get(`${url}:3001/ReqMedia`).then(response => {
        console.log("TCL: HomeImages -> response", response)
        console.log("TCL: axiosGet -> media", media)
        console.log(incommingDataList);
        
        if (media === 'HomeImages') updateFolderFileList(response.data);
    }).catch(error => {
        ////console.log(error.response);
    });
};
