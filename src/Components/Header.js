import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

// Access for Dropbox

export function Header(props) {  
        
    return (
    <> 
        <header id="header">
            <section id="headerContainer">
                <p className="headline">MediaVisare</p>         
                <div></div>
                <p className="headline mediaChanger">Bilder / Filmer</p>
            </section>
        </header>
        
    </>
    );
}
