import {BehaviorSubject} from "rxjs";
let titleName = '';
//let inlogedUserFullName = '';
//let returningUserData = '';
let folderFileListArr = [];

export const folderFileListArr$ = new BehaviorSubject(folderFileListArr);
//===============================================
export function updateFolderFileList(folderFileListArr){
    console.log(folderFileListArr.length);
    
    if(folderFileListArr) {
        folderFileListArr$.next(folderFileListArr);
    }
}

//export const inlogedUserFullName$ = new BehaviorSubject(inlogedUserFullName);
//export const returningUserData$ = new BehaviorSubject(returningUserData);

//export const localStorageObj$ = new BehaviorSubject('');

/* The functions are triggered in another place and send in its data
The incomming data is stored in a new object and the object is then, in the last function, save too localstorage 
*/
/* export function getLogStatus(){
    // Run if a data i saved into the localstorage else no run
    if (window.localStorage.length !== 0) {
        
        let getStatusType = JSON.parse(window.localStorage.getItem("userData")).responsType;
        let getLogInMess = JSON.parse(window.localStorage.getItem("userData")).logInMess;
        
        let logInStatus = {
            type: getStatusType,
            mess: getLogInMess
        };
        //console.log(logInStatus);
        
        return logInStatus;
    }
} */
/* export function updateInlogedUserFullName(){
    inlogedUserFullName = JSON.parse(window.localStorage.getItem("userData")).incommingUserData.loginName;
    inlogedUserFullName$.next(inlogedUserFullName);
} */
/* export function updateReturningUserData(incommingObj){
    console.log(incommingObj);
    
    if(incommingObj) {
        returningUserData$.next(incommingObj);
    }
    updateLocalstorage(incommingObj);
}
export let updateLocalstorage = (saveIntoLocalStorage) =>{
    localStorage.setItem('userData', JSON.stringify(saveIntoLocalStorage));
}
 */