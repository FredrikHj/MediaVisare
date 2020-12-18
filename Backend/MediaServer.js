// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
const app = express();

let cors = require('cors');
const mediaRootPath = 'u:\\testMedia\\';
app.use(express.static(mediaRootPath));

app.use(cors());

//Config for the backend
const backConfig = require('./backConfig.json');
const { setTimeout } = require('timers');

// The server information
const port = backConfig.serverPort;
app.listen(port, () => console.log(`MediaVisare is listening on port ${port}!`));

const reqMediaObj = require('./Functions');


app.get('/ReqMedia:Mediatype', (req, res) => {
    console.log('MediaUpdate');
    const targetMedia = req.params.Mediatype;
    
    reqMediaObj.runGetMedia(mediaRootPath, targetMedia);
    
    //mediaListObj = { mediaType: targetMedia, folders: [], files: [] };
    setTimeout(() => {        
        console.log("🚀 ~ file: MediaServer.js ~ line 33 ~ setTimeout ~ reqMediaObj.mediaListObj()", reqMediaObj.mediaListObj())
        // Send the mediaList
        res.status(200).send(reqMediaObj.mediaListObj());
    }, 2000);
});
/* app.get('/ReqRawData:Media', (req, res) => {
    console.log('Requested Image rawData');

    const targetMedia = req.params.Media;
    const mediaSubPath = targetMedia.split('_')[0];

    const mediaRawDataIndex = targetMedia.split('_')[1];
    const mediaRawDataIndexNr = parseInt(mediaRawDataIndex);

    res.sendFile(`${mediaRootPath + mediaSubPath}\\${mediaListObj.files[mediaRawDataIndexNr].name}`);
}); */