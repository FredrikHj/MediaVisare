import React from 'react';
import axios from 'axios';
import { updateDataListObj } from '../Data/GlobalProps';
//let url = 'https://192.168.0.210';
let url = 'http://localhost';
let mediaFilesObj = {};

export let axiosGetImage = (incommingDataList, runNr) => {
    axios.get(`${url}:3001/ReqImage${runNr}`).then(response => {
        console.log("TCL: HomeImages -> response", response)
        console.log(incommingDataList);
        updateDataListObj(setMediaFilesObj(response.data, response.status, response.statusText));
    }).catch(error => {
        console.log(error.response);
        let errResp = error.response;

        updateDataListObj(setMediaFilesObj(errResp.data, errResp.status, errResp.statusText));
    });
    
    mediaFilesObj = {};
};
let setMediaFilesObj = (data, statusCode, statusText) => {
    mediaFilesObj = { data, statusCode, statusText };
    return mediaFilesObj;
}
