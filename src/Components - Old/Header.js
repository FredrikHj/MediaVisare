import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

// Access for Dropbox
const Dropbox = require('dropbox').Dropbox;

export function Header(props) {  
        
    return (
    <> 
        <header id="header">
            <section id="headerContainer">
                <div></div>
                <p id="headline">MediaVisare</p>         
                <div></div>
            </section>
        </header>
        
    </>
    );
}
