// ==================================== SQLfunctions handling ====================================

//SQL Module
const mysql = require('mysql');

// Import the SQL Config
const serverConfig = require('./ServerConfig.json');

// Some useful variables used in the functions bellow 
let incommingMediaPathArr = [];
let incommingMediaDescriptionArr = [];

// Exported functions running when called from runSQLConn 
exports.incommingMediaPath = () => {
    return incommingMediaPathArr;
}
exports.incommingMediaDescription = () => {
    return incommingMediaDescriptionArr;
}
/* =======================================================================================================================
Headfunction for SQL*/
exports.runSQLConn = (SQLStatement, mediaType) =>{
    // Creates a connection between the server and my client and listen for SQL changes    
    let SQLConn = mysql.createConnection({
        host: serverConfig.host,
        user: serverConfig.user,
        password: serverConfig.password,
        port: serverConfig.sqlPort,
        database: serverConfig.database,
    });
    SQLConn.connect(function(err) { 
        console.log("Connect to the SQL DB. Then collecting the mediaPath and file description :)");
        if (err) throw err;        
        SQLConn.query(SQLStatement, function (error, sqlResult) {
            if (mediaType === 'Images') incommingMediaPathArr.push(sqlResult[0].rootPath);
            if (mediaType === 'description') incommingMediaDescriptionArr.push(sqlResult);
            if (err) {
                return; 
            }
        }); 
        // Closing the connection
        SQLConn.end(); 
    }); 
}
exports.SQLDataArr = [incommingMediaPathArr];
/* =======================================================================================================================
SQL Question builder */
exports.buildCorrectSQLStatement = (targetMediaType) =>{ // Find correct SQLStatement
    let currentStatement = '';
    if (targetMediaType === 'Images') currentStatement = `SELECT * FROM ${serverConfig.SQLTables.pathes} WHERE device="${checkDeviceName()}" and mediaType="${targetMediaType}"`;
    if (targetMediaType === 'description') currentStatement = `SELECT * FROM ${serverConfig.SQLTables.description} WHERE path="/"`;
    
    return currentStatement; 
}
// General functions =========================================================================
/* Add currrentTimeStamp for the tables records. The stamp is using identifaying the record to be removed when you
clicking at the corresponding btns*/ 
let checkDeviceName = () => {
    // Get device name
    const operativeSystem = require("os");
    const hostName = operativeSystem.hostname();
    console.log("🚀 ~ file: GetMediaPath.js ~ line 59 ~ checkDeviceName ~ hostName", hostName)
    return hostName;
}
exports.resetSQLData = () => {
    incommingMediaPathArr = [];
}