/* ================================================== HeadBar ==================================================
Imports module */
import axios from 'axios';

// Import inportant components for the specific page
import { updateMedia, updateMediaRootPath } from'./PropsStorage';
import { BackendURL } from'./BackendURL';

let mediaListObj = {};
let listFileCount = 0;

export let reqMedia = (mediaType, mediaRootPath) => {
    // Type of post method
    if (mediaType === 'Images') reqMediaRoute('/ReqRootPath', mediaType, mediaRootPath);
    //if (reqType === 'showHomeMovies') reqMediaRoute('/ReqHomeMovies');
}
let reqMediaRoute = (routes, mediaType, mediaRootPath) => {
    const mediaOptions = {
        type: mediaType,
        path: mediaRootPath
    };

    axios.get(BackendURL + routes, {params: mediaOptions}).then(response => {
        if(response.status === 200){
            //Save the incomming mediaObj into the mediaListObj created for the Frontend
            mediaListObj = response.data;
            updateMediaRootPath(mediaListObj.mediaRootPath);
            updateMedia(mediaListObj);

        }
    }).
    catch(error => {});
}