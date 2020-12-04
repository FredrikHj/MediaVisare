/* ================================================== HeadBar ==================================================
Imports module */
import axios from 'axios';
//import { updateSiteLoga, updateSavedSQLData, updateOptionColList, updateUserData, updateGotoPage } from '../Storage.js';

// Import inportant components for the specific page

let savedSQLDataArr = [];

export let axiosGet = (getType, tokenStr) => {
        let routes = '';

    // Type of post method
    if (getType === 'showImages') routes = '/ReqImages';
    if (getType === 'showHomeMovies') routes = '/ReqHomeMovies';
    axios.get('http://localhost:3001' + routes, ).then(response => {
        console.log("axiosGet -> response", response)
 
    }).
    catch(error => {});
}