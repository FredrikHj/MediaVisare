import React from 'react';
import axios from 'axios';
import { updateDataListObj } from '../Data/GlobalProps';
//let url = 'https://192.168.0.210';
let url = 'http://localhost';
let mediaFilesObj = {};

export let axiosGetImage = () => {

    axios.get(`${url}:3001/ReqImage`, {responseType: 'blob'}).then(response => {
        console.log("TCL: HomeImages -> response", response)
        
        updateDataListObj(setMediaFilesObj(response.data, response.status, response.statusText));
    }).catch(error => {
        console.log(error.response);
        let errResp = error.response;

        // Run if Backend is not running
        if(errResp === undefined) return;
        
        updateDataListObj(setMediaFilesObj(errResp.data, errResp.status, errResp.statusText));
    });
    
    mediaFilesObj = {};
};
let setMediaFilesObj = (data, statusCode, statusText) => {
    mediaFilesObj = { data, statusCode, statusText };
    return mediaFilesObj;
}
