/* ==================================================  Props handler ==================================================
Imports module */
import {BehaviorSubject} from "rxjs";

import {getLocalStorageData} from './LocalStorage';
const incommingMediaObj = {};
const headName = '';
const gotoMediaType = '';
const mediaRootPath = '';

//===============================================

export const incommingMediaObj$ = new BehaviorSubject(incommingMediaObj);
export const headName$ = new BehaviorSubject(headName);
export const gotoMediaType$ = new BehaviorSubject(gotoMediaType);
export const LocalStorage$ = new BehaviorSubject('');
export const mediaRootPath$ = new BehaviorSubject(mediaRootPath);

export const updateLocalstorage = (saveLoginData) =>{
    // The localstorage is set with the data
    localStorage.setItem('loginData', JSON.stringify(saveLoginData));
}

export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateMedia(incommingMediaObj){
    console.log("🚀 ~ file: PropsStorage.js ~ line 26 ~ updateMedia ~ incommingMediaObj", incommingMediaObj)
    if(incommingMediaObj) incommingMediaObj$.next(incommingMediaObj);
}
export function updateMediaType(gotoMediaType){    
    if(gotoMediaType) gotoMediaType$.next(gotoMediaType);
    return gotoMediaType;
}
export function updateMediaRootPath(mediaRootPath){    
    if(mediaRootPath) mediaRootPath$.next(mediaRootPath);
}