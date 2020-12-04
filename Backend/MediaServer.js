// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
const app = express();

// Filesystem components
const fileSystem = require('fs');

const mediaImagesPath = 'u:\\testBilder';

let cors = require('cors');
app.use(cors());

//Config for the backend
const backConfig = require('./backConfig.json');
const { setTimeout } = require('timers');

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
let requestMedia = () => {
    //mediaListObj.folders
    fileSystem.readdir(mediaImagesPath, (err, files) =>{
        //console.log("🚀 ~ file: MediaServer.js ~ line 38 ~ fileSystem.readdir ~ files", files)
        if (err) return console.log(err);

        
        files.forEach((file) => {
            //Get the size of the incomming media

            if(mediaType(file) === 'folders') {
                const icon = false;
                creatMediaObj(file, icon, 'folders');
            }            
            if(mediaType(file) === 'files'){
                const icon = true;
                creatMediaObj(file, icon, 'files');
            }            
        });
    });
}
let creatMediaObj = (file, correspondingIcon, objKey) => {
    //Get the file information
    let { size} = fileSystem.statSync(`${mediaImagesPath}\\${file}`);
    let { birthtime} = fileSystem.statSync(`${mediaImagesPath}\\${file}`);
    let { mtime} = fileSystem.statSync(`${mediaImagesPath}\\${file}`);

    const mediaObj = {
        name: file,
        size: size,
        icon: correspondingIcon,
        cDate: birthtime,
        mDate: mtime,
    };
    mediaListObj[objKey].push(mediaObj);

}
app.get('/ReqImages', (req, res) => {
    // Emtying the mediaObj
    mediaListObj = { folders: [], files: [] };

    requestMedia();
    console.log('MediaUpdate');
    setTimeout(() => {
        // Send the mediaList
        console.log("🚀 ~ file: MediaServer.js ~ line 69 ~ setTimeout ~ mediaListObj", mediaListObj)
        res.set({'Content-Type': 'image/jpg'});
        res.status(200).send(mediaListObj);
    }, 500);

});