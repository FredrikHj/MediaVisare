import React, { PureComponent } from 'react';
import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

import { logedIn$ } from './store';
import { Header } from './Components/Header';
import { Login } from './Components/Login';
import { Home } from './Components/Home';

class MainApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      authorizate: false,
      logedIn: false,
    } 
  }
  componentDidMount() {
    let subscription = logedIn$.subscribe((logedIn) => { 
      if (logedIn) {
        this.setState({logedIn: logedIn$.value});
      }
    });
    subscription.unsubscribe();
    if (this.state.authorizate === false) return <Redirect to="/"/>;
    let uriData = window.location.hash;
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>MediaVisare - {(this.state.logedIn === false ) ? 'Ej inloggad' : 'Inloggad' }
          </title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet">
          </link>
        </Helmet>
        <div id="appBody">
          <section id="appBody__dashboard">
          </section>
          
          <main id="appBody__mainContent">
            <Header/>
            <main id="mainContent">

            <Router basename={process.env.PUBLIC_URL}> 
              <Route exact path="/" component={ Login } />
              <Route path="/Home" component={ Home }/>
            </Router>
          </main>
          <footer>
            Uppförd av Fredrik Hjärpe 
          </footer>
          </main>           
        </div>
      </>
    );
  }
}

export default MainApp;
