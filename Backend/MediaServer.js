// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
var https = require('https');

const app = express();
app.use(express.json());
let cors = require('cors');
app.use(cors());
const fileSystem = require('fs');

// Module for handle the user logins
//let jwt = require('jsonwebtoken');

const path = require('path');


//Config for the backend
const backConfig = require('./backConfig.json');

// The server information
const port = backConfig.serverPort;

// MYSQL module for connection
//var mysql = require('mysql');
/* https.createServer({
    key: fileSystem.readFileSync('Backend/server.key'),
    cert: fileSystem.readFileSync('Backend/server.cert')
}, app) */
app.listen(port, () => console.log(`MediaVisare is listening on port ${port}!`));
//app.listen(port, () => console.log(`MediaVisare is listening on port ${port}!`)); 
const directoryPath = path.join('./Backend/Images', '');
app.get('/ReqImage:runNr', (req, res) => {
    let imagesList = [];
    let reqRun = parseInt(req.params.runNr);
    console.log(reqRun);
    
    /*     console.log('fdb');
    fileSystem.writeFile('../../../../R/regedUser.json', JSON.stringify(regedUser //debugging , null, 2
        ), function(err) {console.log(err);
    }); */
    fileSystem.readdir(directoryPath, function (err, files) {
        if (reqRun === 1) res.status(200).send(files);
        if (err) {
            console.log('Unable to scan directory: ' + err);
            res.status(500).send('Fel vid inläsning av bilder');
        }

        //listing all files using forEach

        //files.forEach((file) => imaffesr

    });

});