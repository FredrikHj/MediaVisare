// Finctions for the Mediavisare backend

// Filesystem components
const fileSystem = require('fs');

// Media objekt
let mediaListObj = {};

exports.mediaListObj = () => {
    console.log("🚀 ~ file: Functions.js ~ line 32 ~ returnMedia", mediaListObj.files.length);
    return mediaListObj;
}
exports.runGetMedia = (mediaRootPath, targetMedia) =>  {
    // Emtying the mediaObj
    mediaListObj = { mediaType: '', folders: [], files: [] };

    fileSystem.readdir(`${mediaRootPath + targetMedia}\\`, (err, files) =>{
        //console.log("🚀 ~ file: MediaServer.js ~ line 38 ~ fileSystem.readdir ~ files", files)
        if (err) return console.log(err);
        
        files.forEach((file) => {
            //Get the size of the incomming media
            
            if(filesOrFolder(file) === 'folders') {
                const icon = false;
                creatMediaObj(mediaRootPath, file, icon, 'folders');
            }            
            if(filesOrFolder(file) === 'files'){
                const icon = true;
                //if(fileType(file) === 'jpg' || fileType(file) === 'png' || fileType(file) === 'giff') 
                creatMediaObj(mediaRootPath, file, icon, 'files', fileType(file));
            }
                    
        });
    });
    let creatMediaObj = (mediaRootPath, file, correspondingIcon, objKey, mediaPath) => {
        //Get the file information
        let { size} = fileSystem.statSync(`${mediaRootPath + targetMedia}\\${file}`);
        let { birthtime} = fileSystem.statSync(`${mediaRootPath + targetMedia}\\${file}`);
        let { mtime} = fileSystem.statSync(`${mediaRootPath + targetMedia}\\${file}`);
        mediaListObj['mediaType'] = targetMedia;

        const mediaObj = {
            id: 0,
            name: file,
            cDate: birthtime,
            mDate: mtime,
            path: `/${mediaPath}/`,
            sizeMb: size,
            descrption: 'Vill du ha en beskrivning? Skapa en txt fil och lägg i samma mapp som aktuell bild',
            icon: {
                    correspondingsIcon: correspondingIcon,
                    size: { heigth: 0, width: 0}
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
} 