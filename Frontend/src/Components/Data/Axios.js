/* ================================================== HeadBar ==================================================
Imports module */
import axios from 'axios';

// Import inportant components for the specific page
import { updateMedia, updateMediaRootPath } from'./PropsStorage';
import { BackendURL } from'./BackendURL';

let mediaListObj = {};
let listFileCount = 0;

export let reqMedia = (reqType) => {
    console.log("🚀 ~ file: Axios.js ~ line 13 ~ reqMedia ~ reqType", reqType)
    // Type of post method
    if (reqType === 'showImages') reqMediaRoute('/ReqMedia', 'Images');
    //if (reqType === 'showHomeMovies') reqMediaRoute('/ReqHomeMovies');
}
let reqMediaRoute = (routes, mediaType) => {
    axios.get(BackendURL + routes + `${mediaType}`).then(response => {
        if(response.status === 200){
            console.log("🚀 ~ file: Axios.js ~ line 21 ~ axios.get ~ response", response)
            //Save the incomming mediaObj into the mediaListObj created for the Frontend
            mediaListObj = response.data;
            updateMediaRootPath(mediaListObj.mediaRootPath);
            updateMedia(mediaListObj);

            console.log("🚀 ~ file: Axios.js ~ line 24 ~ mediaListObj", mediaListObj)
        }
    }).
    catch(error => {});
}
/* let reqRawData = (routes, mediaPath) => {  
    // Needed loops getting the rawData of a file and current loop getting the rawData
    let subPath = mediaPath;
    
    axiosGetRawData(routes, subPath, listFileCount);
}
let axiosGetRawData = (routes, subPath, index) => {
    let mediaIndexTot = 
    
    axios.get(BackendURL + routes + `${subPath}_${index}`).then(response => {      
    console.log("🚀 ~ file: Axios.js ~ line 44 ~ updateMediaObj ~ mediaListObj", mediaListObj)
    console.log("🚀 ~ file: Axios.js ~ line 44 ~ updateMediaObj ~ mediaListObj", mediaListObj)
    console.log("🚀 ~ file: Axios.js ~ line 44 ~ updateMediaObj ~ mediaListObj", mediaListObj)
        if(response.status === 200) {
            mediaListObj.files[index].rawData = response.data;
        }
    }).
    catch(error => {});
    listFileCount++;

    if(listFileCount < mediaListObj.files.length) axiosGetRawData('/ReqRawData', 'Images', listFileCount);
    else listFileCount = 0;
} */