/* ==================================================  Props handler ==================================================
Imports module */
import {BehaviorSubject} from "rxjs";

import {getLocalStorageData} from './Data/LocalStorage';
const incommingSQLDataArr = [];
const optionColListArr = [];
const headName = '';
const gotoPage = '';

//===============================================

export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);
export const headName$ = new BehaviorSubject(headName);
export const gotoPage$ = new BehaviorSubject(gotoPage);
export const LocalStorage$ = new BehaviorSubject('');

export const updateLocalstorage = (saveLoginData) =>{
    // The localstorage is set with the data
    localStorage.setItem('loginData', JSON.stringify(saveLoginData));
}

export function updateHeadName(headName){
    if(headName) headName$.next(headName);
}
export function updateSavedSQLData(incommingSQLDataArr){
    if(incommingSQLDataArr) incommingSQLDataArr$.next(incommingSQLDataArr);
}
export function updateGotoPage(gotoPage){    
    if(gotoPage) gotoPage$.next(gotoPage);
    return gotoPage;
}