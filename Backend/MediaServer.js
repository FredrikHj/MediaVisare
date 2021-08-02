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

// Functions for the Mediavisare backend
const getSQLData = require('./Functions/ReqSQLData');
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
    let targetMediaType = reqQuery.type;
    let targetSQLData = reqQuery.path;
    if (Boolean('reqQuery.rootPath') === true) {   
        getSQLData.runSQLConn(getSQLData.buildCorrectSQLStatement(targetMediaType), targetMediaType);
        getSQLData.runSQLConn(getSQLData.buildCorrectSQLStatement('description'), 'description');

        setTimeout(() => {
               
            let mediaRootPath = getSQLData.incommingMediaPath()[0];
            app.use(express.static(mediaRootPath));
            reqMediaObj.runGetMedia(targetMediaType, mediaRootPath, targetSQLData); 
        }, 500);
    }
    next();
    
}
app.get('/ReqRootPath', reqMediaRootPath, (req, res) => {
    setTimeout(() => { 
        res.status(200).send(reqMediaObj.mediaListObj()); 
    }, 1000);
});  