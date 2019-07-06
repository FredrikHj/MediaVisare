import React, { PureComponent } from 'react';
//import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import { MediaActionBtn } from './MediaAction';
import { MediaContents } from './MediaContents';
import { NavFileStructure } from './NavFileStructure';

import { updateLogedIn } from '../store';

// Get Dropbox method
//const Dropbox = require('dropbox').Dropbox;

export class MediaHome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() { 
    
    let currentPath = '';
    updateLogedIn(true);
  }
  
  render() {   
    return (
      <div id="appBody">
        <aside id="appBody__patch">
          <NavFileStructure location={this.props.location} />
        </aside>
        <main id="appBody__mainContent">
          {
            <MediaContents 
              location={this.props.location}
              showFileList={ this.state.showFileList }
              getFileItem={ this.getFileItem }
            /> 
          }
        </main>
        <footer id="actionBtnContainer">
          <MediaActionBtn/>
        </footer>
      </div>
    );
  }
}

  