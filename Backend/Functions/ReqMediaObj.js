//Config for the backend
const backConfig = require('./ServerConfig.json');

// Finctions for the Mediavisare backend
var sizeOfImg = require('image-size');

// Filesystem components
const fileSystem = require('fs');
const { TouchBarColorPicker } = require('electron');

// Media objekt
let mediaListObj = {};

exports.mediaListObj = () => {
    console.log("🚀 ~ file: Functions.js ~ line 32 ~ returnMedia", mediaListObj.files.length);
    return mediaListObj;
}
exports.runGetMedia = (choosenMediaPath, targetMediaType) =>  {
    // Emtying the mediaObj
    mediaListObj = { mediaType: '', folders: [], files: [] };

    fileSystem.readdir(`${choosenMediaPath}\\`, (err, files) =>{
        if (err) return console.log(err);
        files.forEach((file, index) => {
            //Get the size of the incomming media
              if(filesOrFolder(file) === 'folders' ) {
                // If the string is equal the stirng in the arr the folder is not included else tf continuea to includw folders
                if (file === folderNotToBeIncluded()[0] || file === folderNotToBeIncluded()[1]) ;
                else {
                    const icon = false;
                    creatMediaObj(choosenMediaPath, file, icon, 'folders');
                }
            }            
            if(filesOrFolder(file) === 'files'){
                const icon = true;
                //if(fileType(file) === 'jpg' || fileType(file) === 'png' || fileType(file) === 'giff') 
                creatMediaObj(choosenMediaPath, file, icon, 'files', fileType(file));
                console.log("🚀 ~ file: ReqMediaObj.js ~ line 60 ~ files.forEach ~ fileType(file)", fileType(file))
                
            }
            });   
    });
    let creatMediaObj = (choosenMediaPath, file, correspondingIcon, objKey, mediaPath) => {
        //Get the file information
        let { size} = fileSystem.statSync(`${choosenMediaPath}\\${file}`);
        let { birthtime} = fileSystem.statSync(`${choosenMediaPath}\\${file}`);
        let { mtime} = fileSystem.statSync(`${choosenMediaPath}\\${file}`);
        let filePath = `/${mediaPath}/`;
        mediaListObj['choosenMediaPath'] = choosenMediaPath;
        mediaListObj['mediaType'] = targetMediaType;

        const mediaObj = {
            id: 0,
            name: file,
            cDate: birthtime,
            mDate: mtime,
            path: '/' //filePath
            ,
            sizeMb: size,
            descrption: 'Vill du ha en beskrivning? Skapa en txt fil och lägg i samma mapp som aktuell bild',
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
    const filesOrFolder = (incommingType) => {
        // Check if incommingType is a file or not 
        let isFile = incommingType.includes('.');
        if(isFile === true) return 'files';
        if(isFile === false) return 'folders';
    }
    const fileType = (incommingType) => {
        // Check if incommingType is a file or not and if that is big or small file end
        let isImage = incommingType.includes('jpg') || incommingType.includes('JPG');
        if(isImage === true) return 'Images';
        if(isImage === false) return 'HomeMovie';
    }
    const folderNotToBeIncluded = () => {
        // Check if non included folder passing
        const folders = ['@Recycle', '_gsdata_'];
        return folders;
    }
}  