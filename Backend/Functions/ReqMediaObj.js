//Config for the backend
const backConfig = require('./ServerConfig.json');

// Functions for the Mediavisare backend
const getSQLData = require('./ReqSQLData');

// Filesystem components
const fileSystem = require('fs');
const { setTimeout } = require('timers');

// Media objekt
let mediaListObj = {};

exports.mediaListObj = () => {
    return mediaListObj;
}
exports.runGetMedia = (targetMediaType, mediaRootPath, mediaSubPath) => {
    let currentPath = mediaRootPath+mediaSubPath;

    // Emtying the mediaObj
    mediaListObj = { mediaType: '', folders: [], files: [] };

    //------------------------------------------------- Handle FileList ---------------------------------------------------
    fileSystem.readdir(`${currentPath}\\`, (err, files) =>{
        if (err) return console.log(err);

        files.forEach((file, index) => {
            //Get the size of the incomming media
            if(filesOrFolder(file) === 'folders' ) {
                // If the string is equal the stirng in the arr the folder is not included else tf continuea to includw folders
                if (file === folderNotToBeIncluded()[0] || file === folderNotToBeIncluded()[1]) ;
                else {
                    const icon = false;
                    creatMediaObj(targetMediaType, currentPath, file, icon, 'folders');
                }
            }            
            if(filesOrFolder(file) === 'files'){
                const icon = true;
                //if(fileType(file) === 'jpg' || fileType(file) === 'png' || fileType(file) === 'giff') 

                // Create an media object one for individuall media file 
                creatMediaObj(targetMediaType, currentPath, file, icon, 'files', mediaSubPath, index);
            } 
        });   
    });
        //-----------------------------------------------------------------------------------------------------------------
    // Call the function after 0,1 seconds because the mediaListObj have to load completely
    setTimeout(() => {
       createMediaDescription();
    }, 100);
}
    //------------------------------------------------- Handle FileList functions -----------------------------------------
    let creatMediaObj = (targetMediaType, currentPath, fileName, correspondingIcon, objKey, mediaSubPath, index) => {
        //Get the fileName information
        let { size} = fileSystem.statSync(`${currentPath}\\${fileName}`);
        let { birthtime} = fileSystem.statSync(`${currentPath}\\${fileName}`);
        let { mtime} = fileSystem.statSync(`${currentPath}\\${fileName}`);
        let filePath = mediaSubPath;
        //mediaListObj['currentPath'] = currentPath;
        mediaListObj['mediaType'] = targetMediaType;

        const mediaObj = {
            id: 0,
            name: fileName,
            cDate: birthtime,
            mDate:  mtime,
            currentPath: filePath,
            sizeMb: SizeBytesIntoMb(size),
            icon: {
                    correspondingsIcon: correspondingIcon,
                    size: { 
                        height: 0,
                        width: 0,
                    }
                },
            rawData: '', 
        }
        mediaListObj[objKey].push(mediaObj); 
        return mediaListObj;
    }
    const SizeBytesIntoMb = (size) => {
        const byteToMb = 1024*1024;
        const sizeInMb = size/byteToMb;
        return sizeInMb.toFixed(3);
    }
    const filesOrFolder = (incommingType) => {
        // Check if incommingType is a file or not 
        let isFile = incommingType.includes('.');
        if(isFile === true) return 'files';
        if(isFile === false) return 'folders';
    }
    const fileType = (incommingType) => {
        // Check if incommingType is a file or not and if that is big or small file end
        let isImage =
        incommingType.includes('jpg') || incommingType.includes('JPG') || 
        incommingType.includes('png') || incommingType.includes('png') || 
        incommingType.includes('heic');
        if(isImage === true) return 'Images';
        if(isImage === false) return 'HomeMovie';  
    }
    const folderNotToBeIncluded = () => {
        // Check if non included folder passing
        const folders = ['@Recycle', '_gsdata_'];
        return folders;
    } 
    //---------------------------------------------------------------------------------------------------------------------
// Request description to eith files if not find any it will return a standard text in else 
const createMediaDescription = () => { 
    let description = '';
    
        if(mediaListObj['files'].length !== 0) description = mediaListObj['files'][0]['description'] = getSQLData.incommingMediaDescription()[0][0]['description'];
        else description = 'Vill du ha en beskrivning? Skapa en txt fil och lägg i samma mapp som aktuell bild';
        return description; 
}