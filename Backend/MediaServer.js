// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
var https = require('https');
var http = require('http');
const app = express();
app.use(express.json());
let cors = require('cors');
app.use(cors());
const fileSystem = require('fs');
//const stream = require('stream')

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
const directoryPath = path.join(__dirname, 'Images/hej.jpeg');

let imgRootDirectory = '/Images/';

let correctFolderName = directoryPath.replace('\\', '/');
console.log("correctFolderName", correctFolderName)


console.log("directoryPath", directoryPath)
let dataList = [];

let updateDataList = () => {
    fileSystem.readdir(directoryPath, function (err, files) {
        
        // Send first time request
/*         for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
            let correctFilesName = files[fileIndex];
            dataList.push(correctFilesName);
        } */
    }); 
}

app.get('/ReqImage', (req, res) => {
    //updateDataList();
       
    setTimeout(() => {
        console.log("updateDataList -> dataList", dataList)
        res.status(200).sendFile(correctFolderName);
        //res.set({'Content-Type': 'image/jpg'}); 
        //res.status(200).send(dataList);

/*         const r = fileSystem.createReadStream(imgRootDirectory) // or any other way to get a readable stream
        const ps = new stream.PassThrough() // <---- this makes a trick with stream error handling
        stream.pipeline(
         r,
         ps, // <---- this makes a trick with stream error handling
         (err) => {
          if (err) {
            console.log(err) // No such file or any other kind of error
            return res.sendStatus(400); 
          }
        })
        ps.pipe(res) // <---- this makes a trick with stream error handling */


    }, 1000);
    
        //if (err) res.status(500).send(`Fel vid inläsning av bilder: ${err}`);
        
        //listing all files using forEach
        
        //files.forEach((file) => imaffesr
    dataList = [];
});