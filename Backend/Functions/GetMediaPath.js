// ==================================== SQLfunctions handling ====================================

//SQL Module
var mysql = require('mysql');
// Import the SQL Config
const serverConfig = require('./ServerConfig.json');

// Some useful variables used in the functions bellow 
let incommingMediaPathArr = [];

// Exported function running when called from both the: Default and User specific method
exports.incommingMediaPath = () => {
    return incommingMediaPathArr;
}
/* =======================================================================================================================
 Headfunction for SQL*/
exports.runSQLConn = (SQLStatement) =>{

    
    console.log("runSQLConn - SQLStatement", SQLStatement)
    // Creates a connection between the server and my client and listen for SQL changes    
    let SQLConn = mysql.createConnection({
        host: serverConfig.host,
        user: serverConfig.user,
        password: serverConfig.password,
        port: serverConfig.sqlPort,
        database: serverConfig.database,
        multipleStatements: serverConfig.multipleStatements,
    });
    SQLConn.connect(function(err) { 
        if (err) throw err;        
        SQLConn.query(SQLStatement, function (error, sqlResult) {
            console.log("🚀 ~ file: GetMediaPath.js ~ line 33 ~ sqlResult", sqlResult)
            console.log("Connect for the SQL DB :)");
            console.log("exports.runSQLConn -> sqlResult", sqlResult[0].rootPath)
            incommingMediaPathArr.push(sqlResult[0].rootPath);//.push(sqlResult);
             
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
    console.log("🚀 ~ file: GetMediaPath.js ~ line 49 ~ targetMediaType", targetMediaType)

    const currentStatement = `SELECT * FROM ${serverConfig.SQLTable} WHERE device="${checkDeviceName()}" and mediaType="${targetMediaType}"`;
    return currentStatement;
}
// General functions =========================================================================
/* Add currrentTimeStamp for the tables records. The stamp is using identifaying the record to be removed when you
clicking at the corresponding btns*/ 
let checkDeviceName = () => {
    // Get device name
    const operativeSystem = require("os");
    const hostName = operativeSystem.hostname();
    console.log("🚀 ~ file: GetMediaPath.js ~ line 52 ~ hostName", hostName)
    return hostName;
}
exports.resetSQLData = () => {
    incommingMediaPathArr = [];
}