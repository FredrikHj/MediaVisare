// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
const app = express();
/* app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
 */
// Filesystem components
const fileSystem = require('fs');

const mediaPath = require('path')
const mediaRootPath = 'u:\\testMedia\\';
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

const filesOrFiles = (incommingType) => {
    // Check if incommingType is a file or not 
    let isFile = incommingType.includes('.');
    if(isFile === true) return 'files';
    if(isFile === false) return 'folders';
}
const fileType = (incommingType) => {
    // Check if incommingType is a file or not 
    let isImage = incommingType.includes('jpg', 'png');
    console.log("🚀 ~ file: MediaServer.js ~ line 36 ~ fileType ~ incommingType", incommingType)
    console.log("🚀 ~ file: MediaServer.js ~ line 38 ~ fileType ~ isFile", isImage)
    if(isImage === true) return 'Images';
    if(isImage === false) return 'HomeMovie';
}
let requestMedia = (mediaSubPatch) => {
    //mediaListObj.folders
    fileSystem.readdir(`${mediaRootPath + mediaSubPatch}\\`, (err, files) =>{
        //console.log("🚀 ~ file: MediaServer.js ~ line 38 ~ fileSystem.readdir ~ files", files)
        if (err) return console.log(err);
        
        files.forEach((file) => {
            //Get the size of the incomming media
            
            if(filesOrFiles(file) === 'folders') {
                const icon = false;
                creatMediaObj(mediaSubPatch, file, icon, 'folders');
            }            
            if(filesOrFiles(file) === 'files'){
                
                const icon = true;
                //if(fileType(file) === 'jpg' || fileType(file) === 'png' || fileType(file) === 'giff') 
                creatMediaObj(mediaSubPatch, file, icon, 'files', fileType(file));
            }            
        });
    });
}
let creatMediaObj = (mediaSubPatch, file, correspondingIcon, objKey, mediaPath) => {
    //Get the file information
    let { size} = fileSystem.statSync(`${mediaRootPath + mediaSubPatch}\\${file}`);
    let { birthtime} = fileSystem.statSync(`${mediaRootPath + mediaSubPatch}\\${file}`);
    let { mtime} = fileSystem.statSync(`${mediaRootPath + mediaSubPatch}\\${file}`);
    
    const mediaObj = {
        mediaType: mediaPath,
        path: `/${mediaPath}/`,
        name: file,
        size: size,
        icon: correspondingIcon,
        rawData: '',
        cDate: birthtime,
        mDate: mtime,
    };
    mediaListObj[objKey].push(mediaObj);
    
}
app.get('/ReqMedia', (req, res) => {
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
/* app.get('/ReqRawData:Media', (req, res) => {
    console.log('Requested Image rawData');

    const targetMedia = req.params.Media;
    const mediaSubPath = targetMedia.split('_')[0];

    const mediaRawDataIndex = targetMedia.split('_')[1];
    const mediaRawDataIndexNr = parseInt(mediaRawDataIndex);

    res.sendFile(`${mediaRootPath + mediaSubPath}\\${mediaListObj.files[mediaRawDataIndexNr].name}`);
}); */