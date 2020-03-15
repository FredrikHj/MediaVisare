// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
var https = require('https');
var http = require('http');
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

let cors = require('cors');
app.use(cors());
const fileSystem = require('fs');

// Module for handle the user logins
let jwt = require('jsonwebtoken');

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
const directoryPath = path.join(__dirname, './public/Images/');

let imgRootDirectory = directoryPath.replace('\\', '/').split('\\')[4];
console.log("imgRootDirectory", imgRootDirectory)

let dataList = [];

let updateDataList = () => {
    fileSystem.readdir(directoryPath, function (err, files) {
        
        // Send first time request
         for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
            let correctFilesName = files[fileIndex];
            dataList.push(`/${imgRootDirectory}/${correctFilesName}`);
        }
    });
}

app.get('/ReqImage', (req, res) => {
    updateDataList();
       
    setTimeout(() => {
        res.set({'Content-Type': 'image/jpg'}); 
        res.status(200).send(dataList);
    }, 1000);
    dataList = [];
});