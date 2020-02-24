// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
var https = require('https');
const app = express();
let cors = require('cors');
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
https.createServer({
    key: fileSystem.readFileSync('server.key'),
    cert: fileSystem.readFileSync('./server.cert')
},  app)
.listen(port, () => console.log(`MediaVisare is listening on port ${port}!`));

const directoryPath = path.join('./Images', '');
app.get('/ReqMedia', cors(), (req, res) => {
    let imagesList = [];
/*     console.log('fdb');
    fileSystem.writeFile('../../../../R/regedUser.json', JSON.stringify(regedUser //debugging , null, 2
        ), function(err) {console.log(err);
    }); */
    fileSystem.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file); 
            imagesList.push(file);
        });
        res.status(200).send(imagesList);
    });

});