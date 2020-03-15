import React from 'react';
import axios from 'axios';
import { updateDataListObj } from '../Data/GlobalProps';
import {serverUrl } from './runUrls';
//let url = 'https://192.168.0.210';
let mediaFilesObj = {};

export let axiosGetImage = () => {

    axios.get(`${serverUrl}ReqImage`).then(response => {
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
