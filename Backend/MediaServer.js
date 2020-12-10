// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Filesystem components
const fileSystem = require('fs');

const mediaPath = require('path')
const mediaRootPath = 'd:\\MediaViewer\\';
app.use(express.static(mediaRootPath));

let cors = require('cors');
app.use(cors());

//Config for the backend
const backConfig = require('./backConfig.json');
const { setTimeout } = require('timers');
const { log } = require('console');

// The server information
const port = backConfig.serverPort;
app.listen(port, () => console.log(`MediaVisare is listening on port ${port}!`));

// Media objekt
let mediaListObj = { folders: [], files: [] };

const mediaType = (incommingType) => {
    // Check if incommingType is a file or not 
    let isFile = incommingType.includes('.');
    if(isFile === true) return 'files';
    if(isFile === false) return 'folders';
}
let requestMedia = (mediaSubPatch) => {
    //mediaListObj.folders
    fileSystem.readdir(`${mediaRootPath + mediaSubPatch}\\`, (err, files) =>{
        //console.log("🚀 ~ file: MediaServer.js ~ line 38 ~ fileSystem.readdir ~ files", files)
        if (err) return console.log(err);
        
        files.forEach((file) => {
            //Get the size of the incomming media
            
            if(mediaType(file) === 'folders') {
                const icon = false;
                creatMediaObj(mediaSubPatch, file, icon, 'folders');
            }            
            if(mediaType(file) === 'files'){
                
                const icon = true;
                creatMediaObj(mediaSubPatch, file, icon, 'files');
            }            
        });
    });
}
let creatMediaObj = (mediaSubPatch, file, correspondingIcon, objKey) => {
    //Get the file information
    let { size} = fileSystem.statSync(`${mediaRootPath + mediaSubPatch}\\${file}`);
    let { birthtime} = fileSystem.statSync(`${mediaRootPath + mediaSubPatch}\\${file}`);
    let { mtime} = fileSystem.statSync(`${mediaRootPath + mediaSubPatch}\\${file}`);
    
    const mediaObj = {
        mediaPath: mediaPath.dirname(file),
        name: file,
        size: size,
        icon: correspondingIcon,
        rawData: '',
        cDate: birthtime,
        mDate: mtime,
    };
    mediaListObj[objKey].push(mediaObj);
    
}
app.get('/ReqImages', (req, res) => {
    console.log('Requested ImagesObj');
    // Emtying the mediaObj
    mediaListObj = { folders: [], files: [] };
    
    requestMedia('Images');
    console.log('MediaUpdate');
    
    setTimeout(() => {
        // Send the mediaList
        res.status(200).send(mediaListObj);
    }, 500);
    
});
app.get('/ReqRawData:Media', (req, res) => {
    console.log('Requested Image rawData');

    const targetMedia = req.params.Media;
    const mediaSubPath = targetMedia.split('_')[0];

    const mediaRawDataIndex = targetMedia.split('_')[1];
    const mediaRawDataIndexNr = parseInt(mediaRawDataIndex);

    res.sendFile(`${mediaRootPath + mediaSubPath}\\${mediaListObj.files[mediaRawDataIndexNr].name}`);
});