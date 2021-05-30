// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
const app = express();
app.use(
    express.urlencoded({
      extended: true
    })
)
  
app.use(express.json());  

let cors = require('cors');
app.use(cors());

// Media modules and files
const getMediaPath = require('./Functions/GetMediaPath');
const reqMediaObj = require('./Functions/ReqMediaObj');

//Config for the backend
const serverConfig = require('./Functions/ServerConfig');
const { setTimeout } = require('timers');

// The server information
const port = serverConfig.backendServerPort;
app.listen(port, () => console.log(`MediaVisare is listening on port ${port}!`));

// Middleware
let reqMediaRootPath = (req, res, next) => {

    // Get the current mediaPath
    let reqQuery = req.query;
    console.log("🚀 ~ file: MediaServer.js ~ line 32 ~ reqMediaRootPath ~ reqQuery", reqQuery)
    console.log("🚀 ~ file: MediaServer.js ~ line 35 ~ reqMediaRootPath ~ Boolean(reqQuery.rootPath)", reqQuery.rootPath, Boolean(reqQuery.rootPath));
    let targetMediaType = reqQuery.mediaType;
/*     if (Boolean('reqQuery.rootPath') === true) {   
        getMediaPath.runSQLConn(getMediaPath.buildCorrectSQLStatement(targetMediaType));
         
        setTimeout(() => {   
            let mediaRootPath = getMediaPath.incommingMediaPath()[0];
            app.use(express.static(mediaRootPath));
            reqMediaObj.runGetMedia(targetMediaType, mediaRootPath, '');      
        }, 500);
    } */
    next();
    
}
app.get('/ReqRootPath', reqMediaRootPath, (req, res) => {
    setTimeout(() => {
        res.status(200).send(reqMediaObj.mediaListObj());
    }, 1000);
}); 