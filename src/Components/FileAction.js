import React, {useState, useEffect} from 'react';
import { localStorage$, currentPath$ } from '../store';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
// Get Dropbox method
const Dropbox = require('dropbox').Dropbox;

export function FileActionBtn(props) {
  const [ currentPath, setCurrentPath] = useState('');
  const [ reviewList, setReviewList] = useState([]);
  const [ logOut, goLogOut ] = useState(false);

  let cleanedCurrentPath = '';

  let getUser = new Dropbox({accessToken: localStorage$.value });
  
  useEffect (() => {
    let subscription = currentPath$.subscribe((currentPath) => { 
      setCurrentPath(currentPath);
    });
    
    gerCleanedPath();
    
    getUser.filesListFolder({path: cleanedCurrentPath})
    .then(response => {
      let getItemArr = response.entries;
      
      setReviewList(getItemArr);
      
      // ===========================================================================================================
    })
    .catch(error => {
      console.error(error);
    }); 
  },  [ currentPath ]);
  function gerCleanedPath() {
    let cleanedCurrentPath = currentPath.replace(/%20/g, " ");
    if (cleanedCurrentPath === "/") {
      cleanedCurrentPath = "";
    }
    return cleanedCurrentPath;
  }
  
  let patchInCurrentFolder = reviewList.map(item => item.path_lower);

  // Upload a file
  function onChangeFile(e){
    e.preventDefault();
  }  function setLogOut() {
    goLogOut(true);
    console.log(goLogOut);
    localStorage.removeItem('insurtUrlParts');
  }
    return (
      <>
        {(logOut === true) ? <Redirect to="/"/> :
        <section id="actionBtnContainer">  
    

    
          <button className="button logOutBtn"onClick={ setLogOut }> Logga Ut</button>
        </section>
        }
      </>
    );
  }
