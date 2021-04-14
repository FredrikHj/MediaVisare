// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
const app = express();

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
let reqMediaPath = (req, res, next) => {
    // Get the current mediaPath
    
    let targetMediaType = req.params.Mediatype;
    console.log("🚀 ~ file: MediaServer.js ~ line 25 ~ reqMediaPath ~ targetMediaType", targetMediaType)
    getMediaPath.runSQLConn(getMediaPath.buildCorrectSQLStatement(targetMediaType));
        
    //mediaRootPath
    next();
    setTimeout(() => {   
        app.use(express.static('c:/' /*mediaRootPath */));
        
        let choosenMediaPath = getMediaPath.incommingMediaPath()[0];
        console.log("🚀 ~ file: MediaServer.js ~ line 30 ~ setTimeout ~ mediaPath", choosenMediaPath)
        reqMediaObj.runGetMedia(choosenMediaPath, targetMediaType);
        
        //res.status(200).send(getMediaPath.incommingMediaPath());
        console.log("🚀 ~ file: MediaServer.js ~ line 31", getMediaPath.incommingMediaPath()[0])    
    }, 500); 
    
} 
app.get('/ReqMedia:Mediatype', reqMediaPath, (req, res) => {
    
    setTimeout(() => {
        res.status(200).send(reqMediaObj.mediaListObj());
    }, 2000);
});

