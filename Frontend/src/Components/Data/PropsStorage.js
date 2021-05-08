/* ==================================================  Props handler ==================================================
Imports module */
import {BehaviorSubject} from "rxjs";

import {getLocalStorageData} from './LocalStorage';
const incommingMediaObj = {};
const headName = '';
const gotoMediaType = '';
const mediaRootPath = '';
const currentFolder = '';
const choosenFile = '';

//===============================================

export const incommingMediaObj$ = new BehaviorSubject(incommingMediaObj);
export const headName$ = new BehaviorSubject(headName);
export const gotoMediaType$ = new BehaviorSubject(gotoMediaType);
export const LocalStorage$ = new BehaviorSubject('');
export const mediaRootPath$ = new BehaviorSubject(mediaRootPath);
export const currentFolder$ = new BehaviorSubject(currentFolder);
export const choosenFile$ = new BehaviorSubject(choosenFile);

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
export function updateCurrentFolder(currentFolder){    
console.log("🚀 ~ file: PropsStorage.js ~ line 43 ~ updateCurrentFolder ~ currentFolder", currentFolder.target.id)

    if(currentFolder) currentFolder$.next(currentFolder);
}
export function updateChoosenFile(choosenFile){    
    if(choosenFile) choosenFile$.next(choosenFile);
}