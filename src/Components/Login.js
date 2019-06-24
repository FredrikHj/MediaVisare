import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

// Access for Dropbox
const Dropbox = require('dropbox').Dropbox;

export function Login(props) {  
  const [redirect, setRedirect] = useState(false);
  function login() {
    setRedirect(true);
  }
  if (redirect === false) return <Redirect to="/Home"/>; // Redirect auto into Home for now until the login is fixed  
      return (
        <> 
          <div id="loginContainer">
              <section>
                  <label>Användarnamn</label><br/>
                  <input id="loginUsName" type="text"/>
              </section>
              <section>
                  <label>Lösenord</label><br/>
                  <input id="loginPwd" type="text"/>
              </section>
              <section>
                <button className="button">
                  <Link id="loginBtn" to="/Home" onClick={ login }>Login</Link>
                </button>
                  

              </section>
          </div>

        </>
      );
    }

/*     export function Auth(props) {  
      const [ redirect, setRedirect] = useState(false);
      useEffect(() => {
    
        let subscription = localStorage$.subscribe((localStorage) => { 
          if (!localStorage) {
            setUrlData(localStorage$.value);
          } 
        });
        urlCleaner();
        let urlContent = props.location.hash;
        if (urlContent != '') {
          setRedirect(true);
        }
      });
    
      function urlCleaner() {
        // Get the url and clean the string from letters = and &. Save the string parts into a object. 
        const parsedHash = queryString.parse(props.location.hash);
        const accessToken = parsedHash.access_token;
    
        saveInLocalStorage(accessToken);
        setRedirect(true);
      }
      function saveInLocalStorage(accessToken) {
        // Saving the URIObj in localStorage
        window.localStorage.setItem('insurtUrlParts', accessToken );
        updateLocalStorage(accessToken);
    
      }
      if (redirect === true) return <Redirect to="/Home"/>;
      return (
        <div>Du skickas nu till Dropbox för inloggning .....</div>
      );
    } */
    
